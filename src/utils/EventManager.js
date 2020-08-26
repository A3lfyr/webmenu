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
    LINKS_TOGGLE: 4,
    QUOTE_TOGGLE: 5,
    QUOTESOURCE_CHANGE: 6,
    SEARCH_TOGGLE: 7,
    SEARCHENGINE_CHANGE: 8,
    BACKGROUND_THEME_CHANGE: 9,
};
