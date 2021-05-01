var vue_background = new Vue({
    el: '#backgroundCredits',
    data: {
        currentBackgroundImage: {
            url: null,
            link: null,
            author: null
        },
        theme: null,
        backgrounds: [{
            "url": "https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/jqgsM3B9Fpo",
            "user": "Yoal Desurmont"
        },
        {
            "url": "https://images.unsplash.com/photo-1483631224226-a219224bb76e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/sMJaf08ugD0",
            "user": "Nicolas Prieto"
        },
        {
            "url": "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/M6XC789HLe8",
            "user": "Aniket Deole"
        },
        {
            "url": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/eOpewngf68w",
            "user": "Tim Swaan"
        },
        {
            "url": "https://images.unsplash.com/photo-1582341305248-af5d85a9c0cd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/_TSHXXo52hA",
            "user": "Nik Shuliahin"
        },
        {
            "url": "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/rCbdp8VCYhQ",
            "user": "Andy Holmes"
        },
        {
            "url": "https://images.unsplash.com/photo-1567544568263-55b6f67b5289?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/10kjsFg6M4E",
            "user": "Andy Holmes"
        },
        {
            "url": "https://images.unsplash.com/photo-1566050980594-f65e237a2e98?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/4iapyjvm714",
            "user": "Andy Holmes"
        },
        {
            "url": "https://images.unsplash.com/photo-1505370914932-3d5df10b0d4e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/zWRgJjM5GhE",
            "user": "Ivan Torres"
        },
        {
            "url": "https://images.unsplash.com/photo-1589112028183-ec50fde02586?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/jn2rJK-NEDg",
            "user": "DICSON"
        },
        {
            "url": "https://images.unsplash.com/photo-1458780981405-16d00e96b523?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/Bc9DPNExOV8",
            "user": "Jamie Street"
        },
        {
            "url": "https://images.unsplash.com/photo-1580218102234-490e83efd85b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/HI5rD5zbU2o",
            "user": "Willian Justen de Vasconcellos"
        },
        {
            "url": "https://images.unsplash.com/photo-1597661905942-8d50e4ab6fc8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/_F2T1OyB7K0",
            "user": "Annie Spratt"
        },
        {
            "url": "https://images.unsplash.com/photo-1592526985927-119090617768?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/8_VWBXsveQE",
            "user": "Nick Fewings"
        },
        {
            "url": "https://images.unsplash.com/photo-1597287258659-0b6391c0c5f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/NQELNMBFt1U",
            "user": "Alex H. Pflaum"
        },
        {
            "url": "https://images.unsplash.com/photo-1578915424189-f3d4297b385a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/jJ2pHxn5mXw",
            "user": "Federico Bottos"
        }
    ],
    },
    methods: {
        applyBackground: function () {
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
        getAllBackgrounds: function() {
            return this.backgrounds;
        },
        setBackground: function(id) {
            let bg = this.backgrounds[id];
            console.log("Background Choose : ");
            console.log(bg);

            this.currentBackgroundImage.url = bg.url;
            this.currentBackgroundImage.link = bg.link;
            this.currentBackgroundImage.author = bg.user;
            sessionStorage["bg_url"] = this.currentBackgroundImage.url;
            sessionStorage["bg_link"] = this.currentBackgroundImage.link;
            sessionStorage["bg_author"] = this.currentBackgroundImage.author;

            this.applyBackground();
        },
        getRandomBackgroundId: function() {
            const nbBackgrounds = this.backgrounds.length;
            let randomID = Math.floor(Math.random() * nbBackgrounds);
            return randomID;
        },
        loadSessionStorageBackground: function () {
            this.currentBackgroundImage.url = sessionStorage["bg_url"];
            this.currentBackgroundImage.link = sessionStorage["bg_link"];
            this.currentBackgroundImage.author = sessionStorage["bg_author"];
        }
    },
    created() {
        if (sessionStorage["bg_url"] !== undefined && sessionStorage["bg_link"] !== undefined && sessionStorage["bg_author"] !== undefined) {
            this.loadSessionStorageBackground();
            this.applyBackground();
        } else {
            this.setBackground(this.getRandomBackgroundId());
        }
        EventManager.subscribe(this);
    }
});