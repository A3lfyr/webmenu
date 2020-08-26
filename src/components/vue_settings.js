var vue_welcomeMessage = new Vue({
    el: '#vue_settings',
    data: {
        activePage: "Dashboard",
        Category: [
            {
                name: "General",
                Pages: [
                    "Dashboard", "Recherches", "Données locales"
                ]
            },
            {
                name: "Apparence",
                Pages: [
                    "Background",
                ]
            },
            {
                name: "Modules",
                Pages: [
                    "Météo", "Citation"
                ]
            },
            {
                name: "Crédits",
                Pages: [
                    "Développement", "API"
                ]
            }

        ]
    },
    methods: {
        changeActivePage: function(newPageName){
            this.activePage = newPageName;
        },
        onEvent: function (type, data) {
            switch (type) {
                case EventType.SETTINGS_CHANGE:
                    this.saveSettings();
                    break;

                case EventType.USERNAME_CHANGE:
                    break;

                case EventType.WEATHER_TOGGLE:
                    break;

                case EventType.WEATHER_GPS_CHANGE:
                    break;

                case EventType.LINKS_TOGGLE:
                    break;

                case EventType.QUOTE_TOGGLE:
                    break;

                case EventType.SEARCH_TOGGLE:
                    break;

                case EventType.SEARCHENGINE_CHANGE:
                    break;

                case EventType.BACKGROUND_THEME_CHANGE:
                    break;
            }
        },
        setUsername(name) {
            WebMenu.setUsername(name);
        },
        getUsername() {
            return WebMenu.getUsername();
        },
        setSearchEngine(searchEngineName) {
            for (let [key, value] of Object.entries(SearchEngine)) {
                if(searchEngineName == value.name) {  
                    WebMenu.setSearchEngine(value);
                }
            }
        },
        getSearchEngineList() {
            return Object.entries(SearchEngine);
        },
        getSearchEngineName() {
            return WebMenu.getSearchEngine().name;
        },
        ///
        setQuoteSource(QuoteSourceName) {
            for (let [key, value] of Object.entries(QuoteSource)) {
                if(QuoteSourceName == value.name) {  
                    WebMenu.setQuoteSource(value);
                }
            }
        },
        getQuoteSourceList() {
            return Object.entries(QuoteSource);
        },
        getQuoteSourceName() {
            return WebMenu.getQuoteSource().name;
        },
    },
    created() {
        EventManager.subscribe(this);
        this.activePage = "Dashboard";
    }
});