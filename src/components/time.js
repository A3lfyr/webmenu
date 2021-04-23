var vue_time = new Vue({
    el: '#time',
    data: {
        enable: true,
        time: ""
    },
    created() {
        this.enable = WebMenu.getToogleComponent('times');
        setInterval(() => {
            this.time = getTime()
        }, 100);
    }
});