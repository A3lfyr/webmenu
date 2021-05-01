var vue_background = new Vue({
    el: '#backgroundCredits',
    data: {
        currentBackgroundImage: {
            url: null,
            link: null,
            author: null
        },
        theme: null,
        backgrounds: [
        {
            "url": "https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
            "link": "https://unsplash.com/photos/jqgsM3B9Fpo",
            "user": "Yoal Desurmont",
            "site:": "Unsplash"
        },
        {
            "url": "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "link": "https://www.pexels.com/fr-fr/photo/feuilles-vertes-1072179/",
            "user": "Cátia Matos",
            "site:": "Pexel"
        },
        {
            "url": "https://images.unsplash.com/photo-1531156992292-d36397ee9184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
            "link": "https://unsplash.com/photos/_1UF_3TlKcQ",
            "user": "Mykyta Martynenko",
            "site:": "Unsplash"
        },
        {
            "url": "https://images.unsplash.com/photo-1566050980594-f65e237a2e98?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/4iapyjvm714",
            "user": "Andy Holmes",
            "site:": "Unsplash"
        },
        {
            "url": "https://images.unsplash.com/photo-1580218102234-490e83efd85b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/HI5rD5zbU2o",
            "user": "Willian Justen de Vasconcellos",
            "site:": "Unsplash"
        },
        {
            "url": "https://images.unsplash.com/photo-1597661905942-8d50e4ab6fc8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/_F2T1OyB7K0",
            "user": "Annie Spratt",
            "site:": "Unsplash"
        },
        {
            "url": "https://images.unsplash.com/photo-1578915424189-f3d4297b385a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNjI0MH0",
            "link": "https://unsplash.com/photos/jJ2pHxn5mXw",
            "user": "Federico Bottos",
            "site:": "Unsplash"
        },
        {
            "url": "https://images.pexels.com/photos/3875821/pexels-photo-3875821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "link": "https://www.pexels.com/fr-fr/photo/vue-aerienne-des-batiments-de-la-ville-3875821/",
            "user": "Peter Olexa",
            "site:": "Pexel"
        },
        {
            "url": "https://images.pexels.com/photos/4512439/pexels-photo-4512439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "link": "https://www.pexels.com/fr-fr/photo/volant-de-voiture-noir-pendant-la-nuit-4512439/",
            "user": "Aleksandar Pasaric",
            "site:": "Pexel"
        },
        {
            "url": "https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "link": "https://www.pexels.com/fr-fr/photo/collection-de-plumes-delicates-sur-fond-noir-4004374/",
            "user": "Evie Shaffer",
            "site:": "Pexel"
        },
        {
            "url": "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "link": "https://www.pexels.com/fr-fr/photo/photo-d-horizon-la-nuit-3075993/",
            "user": "Sanaan Mazhar",
            "site:": "Pexel"
        },
        {
            "url": "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "link": "https://www.pexels.com/fr-fr/photo/personnes-au-concert-1105666/",
            "user": "Vishnu R Nair",
            "site:": "Pexel"
        },
        {
            "url": "https://images.pexels.com/photos/1114900/pexels-photo-1114900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "link": "https://www.pexels.com/fr-fr/photo/eclipse-lunaire-1114900/",
            "user": "Johannes Plenio",
            "site:": "Pexel"
        },
        {
            "url": "https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "link": "https://www.pexels.com/fr-fr/photo/montagnes-derriere-la-pleine-lune-1183021/",
            "user": "Eberhard Grossgasteiger",
            "site:": "Pexel"
        },
        {
            "url": "https://images.pexels.com/photos/949193/pexels-photo-949193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "link": "https://www.pexels.com/fr-fr/photo/homme-en-veste-rouge-debout-a-l-exterieur-de-la-grotte-en-face-de-trois-montagnes-949193/",
            "user": "S Migaj",
            "site:": "Pexel"
        },
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