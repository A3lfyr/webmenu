const DEFAULT_LATITUDE = 48.8588377;
const DEFAULT_LONGITUDE = 2.2770203;
const WebMenu = new(class {
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
                    city: null,
                    latitude: DEFAULT_LATITUDE,
                    longitude: DEFAULT_LONGITUDE
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
    // Settings
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
    // Background
    refreshBackground() {
        sessionStorage.clear();
        document.location.reload(true);
    }
    // Dashboard
    getUsername() {
        return this.Settings.General.username;
    }
    setUsername(username) {
        this.Settings.General.username = username;
        EventManager.sendEvent(EventType.USERNAME_CHANGE, username);
        this.saveSettings();
    }
    // Weather
    getCity() {
        return this.Settings.Components.Weather.city;
    }
    setCity(newCity) {
        this.Settings.Components.Weather.city = newCity;
        EventManager.sendEvent(EventType.WEATHER_CITY_CHANGE, newCity);
        this.saveSettings();
    }
    getGPS() {
        let gps = [this.Settings.Components.Weather.latitude, this.Settings.Components.Weather.longitude]
        return gps;
    }
    setGPS(gps) {
        var latitude = gps[0];
        if (latitude == "") latitude = DEFAULT_LATITUDE.toString();
        var longitude = gps[1];
        if (longitude == "") longitude = DEFAULT_LONGITUDE.toString();
        this.Settings.Components.Weather.latitude = latitude;
        this.Settings.Components.Weather.longitude = longitude;
        EventManager.sendEvent(EventType.WEATHER_GPS_CHANGE, [latitude, longitude]);
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
    // Quotes
    getQuoteSource() {
        return this.Settings.Components.Quote.source;
    }
    setQuoteSource(source) {
        this.Settings.Components.Quote.source = source;
        EventManager.sendEvent(EventType.QUOTESOURCE_CHANGE, source);
        this.saveSettings();
    }
})();