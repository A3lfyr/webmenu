var vue_search = new Vue({
    el: '#search',
    data: {
        enable: true,
        searchEngine: null,
        searchUrl: null
    },
    methods: {
        getSearchUrl: function() {
            switch (this.searchEngine) {
                case "Bing":
                    this.searchUrl = "https://www.bing.com/search";
                    break;
    
                case "DuckDuck Go":
                    this.searchUrl = "https://duckduckgo.com/?";
                    break;

                case "Qwant":
                    this.searchUrl = "https://www.qwant.com/?q=";
                    break;
            
                default:
                    this.searchUrl = "https://www.google.com/search";
                    break;
            }
            return this.searchUrl;
        },
        onEvent: function (type, data) {
            console.log("EVENT : " + type + " => " + data);
            
            switch (type) {
                case EventType.SEARCH_TOGGLE:
                    this.enable = data;
                    break;

                case EventType.SEARCHENGINE_CHANGE:
                    this.searchEngine = data;
                    break;
            }
        },
    },
    created() {
        EventManager.subscribe(this);
    }
});