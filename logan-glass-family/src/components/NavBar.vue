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
  background-image: url('https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-class-reunion-poster-image_133308.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  color: black;
}
.navbar {
  list-style-type:inherit ;
  background-color: ivory;
}
</style>
