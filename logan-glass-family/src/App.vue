<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
    <img alt="Family Picture 2019" src="./assets/family2019.jpg">
    <Users msg="Family Listing:"/>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Users from './components/Users'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    NavBar,
    Users,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
