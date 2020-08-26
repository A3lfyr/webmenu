const WebMenu = new (class {
    constructor() {
        this.Settings = {
            General: {
                username: null
            },
            Display: {
                
            },
            Components: {
                Search: {
                    enable: true,
                    engine: SearchEngine.GOOGLE
                },
                Weather: {
                    enable: true,
                    latitude: 48.8588377,
                    longitude: 2.2770203
                },
                Quote: {
                    enable: true,
                    source: QuoteSource.KAAMELOTT
                },
                Favorites: {
                    enable: false,
                    links: [],
                }
            }
        }
    }
    loadSettings() {
        this.Settings = JSON.parse(localStorage["Settings"]);
        console.log("[WebMenu] Settings loaded !")
    }
    saveSettings() {
        localStorage["Settings"] = JSON.stringify(this.Settings);
        console.log("[WebMenu] Settings saved !")
    }
    eraseData() {
        localStorage.clear();
        sessionStorage.clear();
        document.location.reload(true);
        console.log("[WebMenu] All data erased !")
    }
    refreshBackground() {
        sessionStorage.clear();
        document.location.reload(true);
    }
    getUsername() {
        return this.Settings.General.username;
    }
    setUsername(username) {
        this.Settings.General.username = username;
        EventManager.sendEvent(EventType.USERNAME_CHANGE, username);
        this.saveSettings();
    }
    getGPS() {
        let gps = [this.Settings.Components.Weather.latitude,this.Settings.Components.Weather.longitude]
        return gps;
    }
    setGPS(gps) {
        this.Settings.Components.Weather.latitude = gps[0];
        this.Settings.Components.Weather.longitude = gps[1];
        EventManager.sendEvent(EventType.WEATHER_GPS_CHANGE, gps);
        this.saveSettings();
    }
    getSearchEngine() {
        return this.Settings.Components.Search.engine;
    }
    setSearchEngine(searchEngine) {
        this.Settings.Components.Search.engine = searchEngine;
        EventManager.sendEvent(EventType.SEARCHENGINE_CHANGE, searchEngine);
        this.saveSettings();
    }
    getQuoteSource() {
        return this.Settings.Components.Search.engine;
    }
    setQuoteSource(source) {
        this.Settings.Components.Quote.source = source;
        EventManager.sendEvent(EventType.QUOTESOURCE_CHANGE, source);
        this.saveSettings();
    }
})();
