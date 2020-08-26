var vue_time = new Vue({
    el: '#time',
    data: {
        time: ""
    },
    created() {
        setInterval(() => {
            this.time = getTime()
        }, 100);
    }
});