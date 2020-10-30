<template>
<div class="spacing">
  <h1>Latest Reunion News</h1>
  <p>Updated {{moment(date).format('MMMM Do, YYYY')}} </p>
  <h2>Want to know what is happening! Check out our News page.</h2>

  <p>Due to COVID the reunion committee is in the process of renegotiating the rates for the hotel for our next reunion please check this link for updates.  In early 2021 we will have this information to share with the family.</p>

  <img src="../assets/news-img.jpg" alt="News">
  
  <!-- <h2>Find the latest news on the plans for the Family Reunion.</h2> -->

  <ul>
    <li>Date: 7/23/21 - 7/25/21</li>
    <li>Location: Williamsburg VA</li>
    <li>Hotel Information:
      <p>The committee has secured the same hotel for 2020 <a href= "http://www.fortmagruderhotel.com/default-en.html"> Fort Magrunder Hotel and Conference Center.</a></p>
    </li>
    <li>Rates: 
      <p> We are still negotiating rates for next year.  More information will be provided early 2020.</p>
    </li>
  </ul>

  <h3>Come back to stay up on the latest reunion news. </h3>

</div>
</template>

<script>
export default {
  name: 'News' // this is the name of the compnent
}
</script>

<style>
img {
  float:left;
  padding:4rem;
}

</style>
