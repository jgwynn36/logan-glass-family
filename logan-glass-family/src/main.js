import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false;

Vue.use(VueAxios, axios)
Vue.use(VueRouter);

Vue.prototype.moment = moment;

Vue.config.productionTip = false

new Vue({
  router, //inject the router to make whole app router-aware
  render: h => h(App)
}).$mount('#app')
