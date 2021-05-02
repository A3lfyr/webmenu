<template>
  <Clock/>
  <Background/>
</template>

<script>
import Clock from './components/Clock'
import Background from './components/Background'

export default {
  name: 'App',
  components: {
    Clock,
    Background
  }
}
</script>

<style>
#app { 
  margin: 0;
  padding: 0;
  background: url("") no-repeat center fixed;
  -webkit-background-size: cover;
  background-size: cover;
  height: 100vh;
}
</style>
