var app = new Vue({
    el: '#app',
    data: {
        Settings: [
            {
                name: "General",
                Pages: [
                    {
                        name: "Dashboard",
                        data: {
                            username: ""
                        }
                    },
                    {
                        name: "Recherches",
                        enable: true,
                        data: {
                            searchEngine: "Google"
                        }
                    },
                    {
                        name: "Données locales",
                    }
                ]
            },
            {
                name: "Modules",
                Pages: [
                    {
                        name: "Météo",
                        enable: true,
                        data: {
                            theme: "",
                            latitude: "",
                            longitude: ""
                        }
                    },
                    {
                        name: "Citation",
                        enable: true,
                        data: {
                        }
                    },
                    {
                        name: "Favoris",
                        enable: false,
                        data: {
                        }
                    },
                ]
            },
            {
                name: "Apparence",
                Pages: [
                    {
                        name: "Background",
                        data: {
                            theme: ""
                        }
                    }
                ]
            },
            {
                name: "Credits",
                Pages: [
                    {
                        name: "Développement",
                    },
                    {
                        name: "API",
                    }
                ]
            }
        ]
    }
});