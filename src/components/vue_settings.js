var vue_settings = new Vue({
    el: '#vue_settings',
    data: {
        activePage: "Dashboard",
        Category: [{
                name: "General",
                Pages: [
                    "Dashboard", "Données locales"
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
                    "Recherches", "Météo", "Citation"
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
        changeActivePage: function (newPageName) {
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
        // Dashboard
        setUsername(name) {
            WebMenu.setUsername(name);
        },
        getUsername() {
            return WebMenu.getUsername();
        },
        // Search
        setSearchEngine(searchEngineName) {
            for (let [key, value] of Object.entries(SearchEngine)) {
                if (searchEngineName == value.name) {
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
        // Quotes
        setQuoteSource(QuoteSourceName) {
            for (let [key, value] of Object.entries(QuoteSource)) {
                if (QuoteSourceName == value.name) {
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
        // Weather
        getCity: function () {
            return WebMenu.getCity();
        },
        setCity: function (newCity) {
            WebMenu.setCity(newCity);
        },
        setGPSbyCity: function (city) {

        },
        setCityByGPS: function (gps) {
            let searchURL = "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" + gps[0] + "&longitude=" + gps[1]  +"&localityLanguage=fr";
            fetch(searchURL)
                .then(result => {
                    return result.json();
                })
                .then(data => {
                    let city = data.city + ", " + data.countryName;
                    this.setCity(city);
                    document.getElementById("CityField").value=city;
                })
                .catch(console.error)
        },
        getLatitude: function () {
            let GPS = WebMenu.getGPS();
            let latitude = GPS[0]
            return latitude;
        },
        setLatitude: function (newLatitude) {
            WebMenu.setGPS([newLatitude, this.getLongitude()]);
        },
        getLongitude: function () {
            return WebMenu.getGPS()[1];
        },
        setLongitude: function (newLongitude) {
            WebMenu.setGPS([this.getLatitude(), newLongitude]);
        },
        setGPSbyNavigator: function () {
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };
              
            navigator.geolocation.getCurrentPosition(success, error, options); 

            function success(pos) {
                var crd = pos.coords;
                let gps = [crd.latitude, crd.longitude]
                WebMenu.setGPS(gps);
                document.getElementById("latitudeField").value=crd.latitude;
                document.getElementById("longitudeField").value=crd.longitude;
                vue_settings.setCityByGPS(gps);
            }

            function error(err) {
                console.warn(`ERREUR (${err.code}): ${err.message}`);
            }
        },
    },
    created() {
        EventManager.subscribe(this);
        this.activePage = "Dashboard";
    }
});