const EventManager = new (class {
    constructor() {
        this.subscribers = new Array();
    }
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }
    sendEvent(type) {
        this.subscribers.forEach(sub => {
            sub.onEvent(type);
        });
    }
    sendEvent(type, data) {
        this.subscribers.forEach(sub => {
            sub.onEvent(type, data);
        });
    }
})();

const EventType = {
    SETTINGS_CHANGE: 0,
    USERNAME_CHANGE: 1,
    WEATHER_TOGGLE: 2,
    WEATHER_GPS_CHANGE: 3,
    WEATHER_CITY_CHANGE: 4,
    LINKS_TOGGLE: 5,
    QUOTE_TOGGLE: 6,
    QUOTESOURCE_CHANGE: 7,
    SEARCH_TOGGLE: 8,
    SEARCHENGINE_CHANGE: 9,
    BACKGROUND_THEME_CHANGE: 10,
};
