<template>
  <h1 class="title" id="time" v-if="enable">{{ time }}</h1>
</template>

<script>
export default {
  name: 'Clock',
  data() {
    return {
      enable: true,
      time: ""
    };
  },
  methods: {
    getTime: function() {
        const today = new Date();
        this.time = "";
        if (today.getHours() < 10) {
            this.time += "0";
        }
        this.time += today.getHours() + ":";
        if (today.getMinutes() < 10) {
            this.time += "0";
        }
        this.time += today.getMinutes();
    }
  },
  created() {
    setInterval(() => {
      this.getTime()
    }, 100);
  }
}
</script>

<style scoped>
  h1 {
    font-size: 10em;
    color: white;
    font-family: 'Titillium Web', sans-serif;
    font-weight: 300;
  }
</style>
