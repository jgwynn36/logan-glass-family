<template>
<div>
  <h1>Reunion Committee Members</h1>
  <h2>Meet your 2021 Virginia Committee Members</h2>
   <img class="team" src="../assets/team-img.jpeg" alt="Team">
  <p>In order to put together any event you always need a team.  Teamwork is the key to a successful event.  Without each of these people the family reunion would not be the same.</p>
  <p>Here is a list of the team players that have dedicated time and effort to keeping this family together for another year.</p>
  <p>Special Thank you to everyone who participated in the planning of this event.</p>
  
  <!-- default gallery mode -->
  <v-gallery :images="list" :caption="true" class="image-box" >
  </v-gallery>
</div>
</template>

<script>
export default {
  name: 'Members', // this is the name of the compnent
  data(){
    return {
      list: [
        {title:'Jacqueline Gwynn', url:'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/96821058_10220339285344779_5537886550349578240_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=HwHIirWoMDEAX-apZ6r&_nc_oc=AQmm9xuKDJVivUEx8EMPoqOcfQtL8fn3rQHdQpxHX4mCyK5WBKMATZSQZngwnE10B_S4th_DuxnUGL25w5ORdxKA&_nc_ht=scontent-lga3-1.xx&oh=6dc8f2606545c9b04a91e827c93c87d6&oe=5FC0A002'},
        {title:'Nancy Gwynn',url:'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/97020571_10220339287864842_999194849737441280_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=Q5eyBBrYE4gAX9nDsYM&_nc_ht=scontent-lga3-1.xx&oh=97a74e6a3421f57bf7c6d5d16c884154&oe=5FC10B29'},
        {title:'Carlton Lanier', url:'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/59361954_10217220483816690_6542280552488108032_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=VFo3hZj-FX8AX_UfUhq&_nc_ht=scontent-lga3-1.xx&oh=150eff574592de4ed4536c1cfd618f59&oe=5FBF26A2'},
        {title:'Ashley Gwynn-Keene', url:'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/60184317_10101482650039892_7350937317101535232_o.jpg?_nc_cat=101&ccb=2&_nc_sid=174925&_nc_ohc=HJ0D-HidrIMAX809IsN&_nc_ht=scontent-lga3-1.xx&oh=67814f7c005c5e01b8d4226ae8656ba1&oe=5FC2D400'},
        {title:'Carolyn Troy', url:'https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/30806434_364743644029205_574482192772858235_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=272FTPLSPL8AX9FIT7Q&_nc_oc=AQkPgCFyYyjJDXhsXwtzxJntTysy6eje1dRvIiwGoMgH17DYjxQAVL4Ai1Dx0bWZWhuIUsMF1eyO7B-O56RTANiu&_nc_ht=scontent-lga3-1.xx&oh=6ec74fc7919fe85bf6415e57ccfa8751&oe=5FC22EA4'},
        {title:'Robin Miller-Cobbs', url:'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/53639427_2153360918055951_4402804660558102528_n.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_ohc=dUhYTMtjtPcAX-wOzIa&_nc_ht=scontent-lga3-1.xx&oh=bdb83bf097e5e3fd78abf555fd964c23&oe=5FC30B12'},
        {title:'Kelvin Glass', url:'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/30698756_10155538860261275_4012708686046269444_n.jpg?_nc_cat=111&ccb=2&_nc_sid=8bfeb9&_nc_ohc=jH4PDhJUN28AX8ZNOB5&_nc_ht=scontent-lga3-1.xx&oh=36d5f4a65e64e01c3eb9d726df0c19d1&oe=5FC30622'}, 
        {title:'Leander Lanier', url:'https://lh3.googleusercontent.com/proxy/OMllYUtOy_GD9w2Iltm9lCSnbTe2-ptcVt5iylsbSvQDKyzLt0EEuih43bpTdGRGhtKEkrLk42C_Vk_B4qN2t_sRQk8kL17yc_am2BMVRnq8_k1Iyvw9TyVfAqf0uLSx1c4'}, 
        {title:'John Glass', url:'https://lh3.googleusercontent.com/proxy/OMllYUtOy_GD9w2Iltm9lCSnbTe2-ptcVt5iylsbSvQDKyzLt0EEuih43bpTdGRGhtKEkrLk42C_Vk_B4qN2t_sRQk8kL17yc_am2BMVRnq8_k1Iyvw9TyVfAqf0uLSx1c4'}
      ]
    }
  }
}
</script>

<style>
img {
  padding:0px;
}
.team {
  padding:2rem;
  float: left;
}


</style>
