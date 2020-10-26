<template>
  <div class="body">
    <h1>Hello Family!!</h1>
    <h6 id="date">{{moment(date).format('MMMM Do YYYY, h:mm:ss a')}}</h6> 
    <h4 class="glow">Please remember to GO VOTE this is an important election year</h4>
    
    <div class="information">
      <div class="reunion">
        <h2>2021 Reunion Information: {{moment("20210724", "YYYYMMDD").fromNow()}}</h2>
        <h4>Our next Reunion will be held on 7/23/21 - 7/25/21 in Williamburg Virginia</h4>
        <div class="par1">
          <img src="../assets/williamsburg-img.jpeg" alt="Williamsburg">
          <p>I hope everyone is safe and healthy during these times.  Unfortunity the 2020 reunion was postponed due to COVID-19.  Thank you to our family members that hosted and planned the virtual meetup for the family.  It was nice to see everyone who participated in the zoom meeting. </p>
          <p>Next year the VA committee is back on track to plan an awesome event in Williamburg VA. Currently we still have the same locations and hotels in place but we are waiting for 2021 pricing to provide more information.  A newsletter will be sent out early next year with more information.</p>
          <p>If you have new contact information or would like to provide a better form of communication with the committee please use the <a rel="noopener noreferrer" target="blank" href="/Contact">Contact Us</a> link to provide this information and we will update our records and provide news to you.</p>
        </div>
     </div>

    <div class="par2">
      <h2>About:</h2>
      <p>This website has been created to provide the Logan Glass family with a way to share information about events. </p>
      <p>Apart from the reunion, this website allows our family to share memories. </p>
      <p>Some of my favorite memories are with my cousins are at the annual family reunions.  It is the one-time in the year that everyone can come together and reminisce about times in my grandmothers yard and hiding from bats under the light pole. </p>
      <p>The family is also looking to update some technology and begin to use online registration so that we can have up-to-date contact information for the members within the family.  This site is geared to confirm attendence, accept payment, and contain reunion information. </p>
      <p>We invite you to get involved with the reunion activities. Reconnect with cousins you haven't seen in years and meet the new generations of cousins. </p>
    </div>
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
  text-align: left; 
  padding-bottom: 30rem;
}
.glow {
  padding: 3rem;
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
.par2 {
  margin-left: 1rem;
  float: left;
}
.par1 {
  padding-top: 2rem;
}

</style>