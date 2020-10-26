<template>
  <div id="banner">
    <div id="innerBanner">
      <h1>Logan & Glass Family Reunion</h1>
    </div>
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/news">News</router-link>
      <router-link to="/members">Members</router-link>
      <router-link to="/photos">Photos</router-link>
      <router-link to="/registration">Registration</router-link>
      <router-link to="/contact">Contact Us</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'NavBar' // this is the name of the compnent
}
</script>

<style>
#banner {
  color: black;
}
.navbar {
  list-style-type:inherit ;
  background-color: gray;
}
</style>
