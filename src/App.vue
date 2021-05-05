<template>
  <header>
    <aside class="left">
      <Search />
    </aside>

    <aside class="center">
    </aside>

    <aside class="right">
      <Weather />
    </aside>
  </header>

  <div class="main">
    <Clock />
    <WelcomeMessage />
  </div>

  <footer>
    <aside class="left">
      <Settings />
      <Background />
    </aside>

    <aside class="center">
      <Quotes />
    </aside>

    <aside class="right">
    </aside>
  </footer>
</template>

<script>
  import Clock from './components/Clock'
  import Quotes from './components/Quotes'
  import Search from './components/Search'
  import Settings from './components/Settings'
  import Weather from './components/Weather'
  import WelcomeMessage from './components/WelcomeMessage'
  import Background from './components/Background'

  export default {
    name: 'WebMenu',
    components: {
      Clock,
      Quotes,
      Search,
      Settings,
      Weather,
      WelcomeMessage,
      Background
    }
  }
</script>

<style>
  @import "./assets/css/colors.css";
  @import "./assets/css/style.css";


  #app {
    margin: 0;
    padding: 0;
    background: url("") no-repeat center fixed;
    -webkit-background-size: cover;
    background-size: cover;

    display: flex;
    min-height: 100vh;
    flex-direction: column;
    margin: 0;
  }

  header, footer, aside {
    display: flex;
    flex: 1;
    padding: 1vh;
  }

  header {
    align-items: flex-start;
  }


  @media screen and (min-width: 600px)
  {
      header {
        padding: 0 10vh;
      }
  }

  @media screen and (min-width: 1360px)
  {
      header {
        padding: 0 30vh;
      }
  }

  footer {
    align-items: flex-end;
  }

  footer > aside {
    flex: 1;
    flex-direction: column;
  }

  .left {
    justify-content:flex-start;
  }

  .center {
    justify-content:center;
    align-items: center;
  }

  .right {
    justify-content:flex-end;
  }

  .main {
    display: flex;
    flex: 3;
    flex-direction: column;
    justify-content:center;
    align-items: center;
  }

  footer > .center {
    padding-bottom: 5vh;
  }
</style>