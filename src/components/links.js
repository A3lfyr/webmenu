/*var vue_links = new Vue({
    el: '#links',
    data: {
        enable: false,
        links: [{
                name: "Facebook",
                url: "http://facebook.com"
            },
            {
                name: "Site Perso",
                url: "http://reiter.tf"
            },
            {
                name: "Youtube",
                url: "http://youtube.com"
            }
        ]
    },
    methods: {
        onEvent: function (type, data) {
            switch (type) {
                case EventType.LINKS_TOGGLE:
                    this.enable = data;
                    break;
            }
        }
    },
    created() {
        EventManager.subscribe(this);
    }
});*/