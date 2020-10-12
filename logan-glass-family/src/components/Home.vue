<template>
  <div class="body">
    <div class="welcome">
      <h1 id="pageTitle">Welcome Family!!</h1>
      <h6>{{moment(date).format('MMMM Do YYYY, h:mm:ss a')}}</h6>
    </div>
  <h4 class="glow">Next Reunion will be 7/23 - 7/25 that is only {{moment("20210724", "YYYYMMDD").fromNow()}} away. </h4>
  <img src="../assets/williamsburg-img.jpeg" alt="Williamsburg">
  <div class="content">
    <p>This website has been created to provide the Logan Glass family with a way to share information about events. </p>
    <p>Apart from the reunion, this website allows our family to share memories. </p>
    <p>Some of my favorite memories are with my cousins are at the annual family reunions.  It is the one-time in the year that everyone can come together and reminisce about times in my grandmothers yard and hiding from bats under the light pole. </p>
  </div>
    <div class="par2">
      <p>The family is also looking to update some technology and begin to use online registration so that we can have up-to-date contact information for the members within the family.  This site is geared to confirm attendence, accept payment, and contain reunion information. </p>
      <p>We invite you to get involved with the reunion activities. Reconnect with cousins you haven't seen in years and meet the new generations of cousins. </p>
    </div>
</div>
</template>

<script>
export default {
  name: 'Welcome' // this is the name of the component
}

</script>
<style>
.body {
  background-image: url('../assets/reunion-poster-image.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  text-align: left; 
}
.content {
  width: 50%;
  padding-top: 30px;
  margin-left: 10px;
}
/* img {
  float: right;
} */
.glow {
  padding: 10px;
  color: #fff;
  background-color: black;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}
@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
}
/* .days {
  float:right;
  padding:10px
} */
.par2 {
  margin-left: 10px;
}

</style>