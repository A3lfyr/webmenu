var vue_quotes = new Vue({
    el: '#quotes',
    data: {
        enable: true,
        quote: {
            text: null,
            personnage: null,
            saison: null,
            episode: null
        }
    },
    methods: {
        getRandomQuote: function () {
            fetch("https://kaamelott.reiter.tf/quote/random")
                .then(result => {
                    return result.json();
                })
                .then(data => {
                    this.quote.text = data.citation;
                    this.quote.personnage = data.infos.personnage;
                    this.quote.saison = data.infos.saison;
                    this.quote.episode = data.infos.episode;
                })
                .catch(console.error)
        },
        onEvent: function (type, data) {
            switch (type) {
                case EventType.QUOTE_TOGGLE:
                    this.enable = data;
                    if (this.enable == true) {
                        this.getRandomQuote();
                    }
                    break;
            }
        },
        Toogle: function (newState) {
            this.enable = newState;
        }
    },
    created() {
        this.getRandomQuote()
        this.enable = WebMenu.getToogleComponent('quotes');
        EventManager.subscribe(this);
    }
});