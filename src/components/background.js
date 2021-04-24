var vue_background = new Vue({
    el: '#backgroundCredits',
    data: {
        currentBackgroundImage: {
            url: null,
            link: null,
            author: null
        },
        theme: null,
    },
    methods: {
        getBackgroundImage: function () {
            if (sessionStorage["bg_url"] !== undefined && sessionStorage["bg_link"] !== undefined && sessionStorage["bg_author"] !== undefined) {

                this.currentBackgroundImage.url = sessionStorage["bg_url"];
                this.currentBackgroundImage.link = sessionStorage["bg_link"];
                this.currentBackgroundImage.author = sessionStorage["bg_author"];
                this.changeBackground();
            } else {
                fetch("/src/utils/backgrounds.json")
                    .then(result => {
                        console.log(result)
                        return result.json();
                    })
                    .then(backgroundsArray => {
                        const nbBackgrounds = backgroundsArray.length;
                        let randomID = Math.floor(Math.random() * nbBackgrounds);
                        let randomBackground = backgroundsArray[randomID];

                        console.log("Background Choose : ");
                        console.log(randomBackground);

                        this.currentBackgroundImage.url = randomBackground.url;
                        this.currentBackgroundImage.link = randomBackground.link;
                        this.currentBackgroundImage.author = randomBackground.user;
                        sessionStorage["bg_url"] = this.currentBackgroundImage.url;
                        sessionStorage["bg_link"] = this.currentBackgroundImage.link;
                        sessionStorage["bg_author"] = this.currentBackgroundImage.author;
                        this.changeBackground();
                    })
                    .catch(console.error)
            }

        },
        changeBackground: function () {
            document.getElementById("main").style.background = "url(" + this.currentBackgroundImage.url + ") no-repeat center fixed";
            document.getElementById("main").style.backgroundSize = "cover";
        },
        onEvent: function (type, data) {
            switch (type) {
                case EventType.BACKGROUND_THEME_CHANGE:
                    this.theme = data;
                    this.getBackgroundImage();
                    break;
            }
        },
        refreshBackground: function () {
            sessionStorage.clear();
            document.location.reload(true);
        },
        loadAllBackgrounds: function () {

        }
    },
    created() {
        this.getBackgroundImage();
        EventManager.subscribe(this);
    }
});