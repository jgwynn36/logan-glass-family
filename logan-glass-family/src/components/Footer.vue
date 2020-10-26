<template>
  <mdb-footer color="stylish-color-dark" class="font-small pt-4 mt-4">
    <mdb-container class="text-center text-md-left">
      <mdb-row class="text-center text-md-left mt-3 pb-3">
        <mdb-col md="3" lg="3" xl="3" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Logan Glass Family Reunion</h6>
          <div class="powr-hit-counter" id="eb9aa96f_1603679904"></div>
          <p>Thanks you for being a part of this fantastic family.  We would like to hear from all of you and make this the best communication portal.</p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none" />
        <mdb-col md="2" lg="2" xl="2" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">VA Committee Members</h6>
          <p><a href="#!">Robin Cobbs</a></p>
          <p><a href="#!">John Glass</a></p>
          <p><a href="#!">Kelvin Glass</a></p>
          <p><a href="#!">Nancy Gwynn</a></p>
          <p><a href="#!">Jacqueline Gwynn</a></p>
          <p><a href="#!">Ashley Gwynn-Keene</a></p>
          <p><a href="#!">Genette Lanier-Brown</a></p>
          <p><a href="#!">Carlton Lanier</a></p>
          <p><a href="#!">Leander Lanier</a></p>
          <p><a href="#!">Carolyn Troy</a></p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none" />
        <mdb-col md="3" lg="2" xl="2" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
          <p><a href="!">About</a></p>
          <p><a href="http://localhost:8080/logan-glass-family/#/news">News</a></p>
          <p><a href="http://localhost:8080/logan-glass-family/#/members">Members</a></p>
          <p><a href="http://localhost:8080/logan-glass-family/#/photos">Photos</a></p>
          <p><a href="http://localhost:8080/logan-glass-family/#/registration">Registration</a></p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none" />
        <mdb-col md="4" lg="3" xl="3" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
          <p><i class="fas fa-home mr-3"></i>79 Long Drive, Yanceyville, NC 27379</p>
          <p><i class="fas fa-envelope mr-3"></i> loganglassfamily@gmail.com </p>
          <p><i class="fas fa-phone mr-3"></i> 336-694-9421</p>
          <p><i class="fas fa-print mr-3"></i> 919-971-4607</p>
        </mdb-col>
      </mdb-row>
      <hr />
      <mdb-row class="d-flex align-items-center">
        <mdb-col md="8" lg="8">
          <p class="text-center text-md-left grey-text">&copy; 2020 Copyright: <a href="http://localhost:8080/logan-glass-family/#/">
              LG Family site </a></p>
        </mdb-col>
        <mdb-col md="4" lg="4" class="ml-lg-0">
          <div class="text-center text-md-right">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-facebook"></i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-twitter"></i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-google-plus"></i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </mdb-footer>

</template>

<script>
import {mdbFooter,mdbContainer,mdbRow,mdbCol} from 'mdbvue'; 
export default {
  name: 'Footer',
  components:{
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
}
</script>

<style>
</style>
