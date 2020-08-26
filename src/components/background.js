var vue_background = new Vue({
    el: '#backgroundCredits',
    data: {
        backgroundImage: {
            url: null,
            link: null,
            author: null
        },
        theme: null
    },
    methods: {
        getBackgroundImage: function () {
            if (sessionStorage["bg_url"] !== undefined && sessionStorage["bg_link"] !== undefined && sessionStorage["bg_author"] !== undefined) {
                
                this.backgroundImage.url = sessionStorage["bg_url"];
                this.backgroundImage.link = sessionStorage["bg_link"];
                this.backgroundImage.author = sessionStorage["bg_author"];
                this.changeBackground();
            } else {
                fetch("https://api.unsplash.com/photos/random?query=" + this.theme + "&collections=9941171&orientation=landscape&client_id=FVuyJtYxc_o9usr0a9_e_t1fR7dwHPWIgGgEzBErJGE")
                    .then(result => {
                        return result.json();
                    })
                    .then(data => {
                        this.backgroundImage.url = data.urls.regular;
                        this.backgroundImage.link = data.links.html;
                        this.backgroundImage.author = data.user.name;
                        sessionStorage["bg_url"] = this.backgroundImage.url;
                        sessionStorage["bg_link"] = this.backgroundImage.link;
                        sessionStorage["bg_author"] = this.backgroundImage.author;
                        this.changeBackground();
                    })
                    .catch(console.error)
            }
            
        },
        changeBackground: function() {
            document.getElementById("main").style.background = "url(" + this.backgroundImage.url + ") no-repeat center fixed";
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
        refreshBackground: function() {
            sessionStorage.clear();
            document.location.reload(true);
        },
    },
    created() {
        this.getBackgroundImage();
        EventManager.subscribe(this);
    }
});