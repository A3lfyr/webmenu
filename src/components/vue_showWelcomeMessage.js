var vue_welcomeMessage = new Vue({
    el: '#welcomeMessage',
    data: {
        enable: null,
        message: null,
        username: null
    },
    methods: {
        getWelcomeMessage: function () {
            hour = getHour(getTime());
            if (hour >= 5 && hour <= 11) {
                return "Passez une bonne matinée " + this.username + " !";
            } else if (hour >= 11 && hour <= 17) {
                return "Passez une bonne journée " + this.username + " !";
            } else {
                return "Passez une bonne soirée " + this.username + " !";
            }
        },
        getUsername: function() {
            if(WebMenu.Settings.General.username == null){
                return "";
            } else {
                return WebMenu.Settings.General.username;
            }
        },
        onEvent: function (type, data) {
            switch (type) {
                case EventType.USERNAME_CHANGE:
                    this.username = this.getUsername();
                    this.message = this.getWelcomeMessage();
                    break;
            }
        },
    },
    created() {
        this.username = this.getUsername();
        this.message = this.getWelcomeMessage();
        EventManager.subscribe(this);
    }
});