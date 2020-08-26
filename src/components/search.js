var vue_search = new Vue({
    el: '#search',
    data: {
        enable: true,
        searchEngineName: null,
        searchEngineUrl: null
    },
    methods: {
        onEvent: function (type, data) {            
            switch (type) {
                case EventType.SEARCH_TOGGLE:
                    break;

                case EventType.SEARCHENGINE_CHANGE:
                    this.getSearchEngine(data);
                    break;
            }
        },
        getSearchEngine: function(searchEngine) {
            if(searchEngine === null) {
                searchEngine = WebMenu.getSearchEngine();
            }   
            this.searchEngineName = searchEngine.name;
            this.searchEngineUrl = searchEngine.url;
        }
    },
    created() {
        this.getSearchEngine(null);
        EventManager.subscribe(this);
    }
});