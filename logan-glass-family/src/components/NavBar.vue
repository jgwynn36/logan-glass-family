<template>
  <div>
    <nav class="navbar">
      <h4 class="name">Logan Glass Family</h4>
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
.navbar {
  background-color: #343a40;
}
.name {
  color: white;
}
</style>