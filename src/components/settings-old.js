var vue_welcomeMessage = new Vue({
    el: '#settings',
    data: {
        activePage: "",
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
    },
    methods: {
        changeActivePage: function(newPageName){
            this.activePage = newPageName;
        },
        /******* 0 - GENERAL *******/
        /** 0 - DASHBOARD **/
        getUsername: function() {
            return this.Settings[0].Pages[0].data.username;
        },
        setUsername: function(newUsername) {
            this.Settings[0].Pages[0].data.username = newUsername;
            this.saveSettings();
            EventManager.sendEvent(EventType.USERNAME_CHANGE, newUsername);
        },

        /** 1 - RECHERCHES **/
        // Toggle Display
        getSearchDisplay: function(){
            return this.Settings[0].Pages[1].enable;
        },
        setSearchDisplay: function(state){
            this.Settings[0].Pages[1].enable = state;
            this.saveSettings();
            EventManager.sendEvent(EventType.SEARCH_TOGGLE, state);
        },
        // Search Engine
        getSearchEngine: function() {
            return this.Settings[0].Pages[1].data.searchEngine;
        },
        setSearchEngine: function(newSearchEngine) {
            this.Settings[0].Pages[1].data.searchEngine = newSearchEngine;
            this.saveSettings();
            EventManager.sendEvent(EventType.SEARCHENGINE_CHANGE, newSearchEngine);
        },
        
        /** 2 - DONNEES LOCALES **/

        /******* 1 - MODULES *******/
        /** 0 - WEATHER **/
        // Toggle Display
        getWeatherDisplay: function(){
            return this.Settings[1].Pages[0].enable;
        },
        setWeatherDisplay: function(state){
            this.Settings[1].Pages[0].enable = state;
            this.saveSettings();
            EventManager.sendEvent(EventType.WEATHER_TOGGLE, state);
        },
        // GPS
        getLatitude: function() {
            return this.Settings[1].Pages[0].data.latitude;
        },
        setLatitude: function(newLatitude) {
            this.Settings[1].Pages[0].data.latitude = newLatitude;
            this.saveSettings();
            let GPS = newLatitude + "|" + this.getLongitude();
            EventManager.sendEvent(EventType.WEATHER_GPS_CHANGE, GPS);
        }, 
        getLongitude: function() {
            return this.Settings[1].Pages[0].data.longitude;
        },
        setLongitude: function(newLongitude) {
            this.Settings[1].Pages[0].data.longitude = newLongitude;
            this.saveSettings();
            let GPS = this.getLatitude() + "|" + newLongitude;
            EventManager.sendEvent(EventType.WEATHER_GPS_CHANGE, GPS);
        },

        /** 1 - QUOTE **/
        // Toggle Display
        getQuoteDisplay: function(){
            return this.Settings[1].Pages[1].enable;
        },
        setQuoteDisplay: function(state){
            this.Settings[1].Pages[1].enable = state;
            this.saveSettings();
            EventManager.sendEvent(EventType.QUOTE_TOGGLE, state);
        },

        /** 2 - LINKS **/
        // Toggle Display
        getLinksDisplay: function(){
            return this.Settings[1].Pages[2].enable;
        },
        setLinksDisplay: function(state){
            this.Settings[1].Pages[2].enable = state;
            this.saveSettings();
            EventManager.sendEvent(EventType.LINKS_TOGGLE, state);
        },

        /******* 2 - APPARENCE *******/
        /** 0 - BACKGROUND **/
        getBackgroundTheme: function() {
            return this.Settings[2].Pages[0].data.theme;
        },
        setBackgroundTheme: function(newTheme) {
            this.Settings[2].Pages[0].data.theme = newTheme;
            this.saveSettings();
            EventManager.sendEvent(EventType.BACKGROUND_THEME_CHANGE, newTheme);
        },
        refreshBackground: function() {
            sessionStorage.clear();
            document.location.reload(true);
        },
        getTimedTheme: function () {
            hour = getHour(getTime());
            if (hour >= 5 && hour < 11) {
                theme = "Morning";
            } else if (hour >= 11 && hour <= 17) {
                theme = "";
            } else {
                theme = "NightCity";
            }
            return theme;
        },

        /******* 3 - CREDIT *******/
        /** 0 - DEV **/
        /** 1 - API **/

        /*** GENERAL ***/
        saveSettings: function() {
            localStorage["Settings"] = JSON.stringify(this.Settings);
        },
        loadSettings: function() {
            this.Settings = JSON.parse(localStorage["Settings"]);
        },
        eraseAllData: function() {
            localStorage.clear();
            sessionStorage.clear();
            document.location.reload(true);
        },

        /*** EVENTS ***/
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
        sendAllData: function(){
            EventManager.sendEvent(EventType.USERNAME_CHANGE, this.getUsername());
            EventManager.sendEvent(EventType.SEARCH_TOGGLE, this.getSearchDisplay());
            EventManager.sendEvent(EventType.SEARCHENGINE_CHANGE, this.getSearchEngine());
            if(this.getLatitude() == "" || this.getLongitude() == ""){
                GPS = "48.8588377|2.2770203";
            } else {
                GPS = this.getLatitude() + "|" + this.getLongitude();
            }

            EventManager.sendEvent(EventType.WEATHER_GPS_CHANGE, GPS);
            EventManager.sendEvent(EventType.WEATHER_TOGGLE, this.getWeatherDisplay());
            EventManager.sendEvent(EventType.QUOTE_TOGGLE, this.getQuoteDisplay());
            EventManager.sendEvent(EventType.LINKS_TOGGLE, this.getLinksDisplay());
            
            if (this.getBackgroundTheme() == "") {
                EventManager.sendEvent(EventType.BACKGROUND_THEME_CHANGE, this.getTimedTheme());
            } else {
                EventManager.sendEvent(EventType.BACKGROUND_THEME_CHANGE, this.getBackgroundTheme());
            }
        }
    },
    created() {
        if(localStorage["Settings"] === undefined){
            this.saveSettings();
        } else {
            this.loadSettings();
        }
        EventManager.subscribe(this);
        this.sendAllData();
        this.activePage = "Dashboard";
    }
});