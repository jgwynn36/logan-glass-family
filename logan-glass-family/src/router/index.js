import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Members from "@/components/Members";
import Photos from "@/components/Photos";
import Registration from "@/components/Registration";
import Users from "@/components/Users"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/news",
      name: "News",
      component: News,
    },
    {
      path: "/members",
      name: "Reunion Committee",
      component: Members,
    },
    {
      path: "/photos",
      name: "Photos",
      component: Photos,
    },
    {
      path: "/registration",
      name: "Registration",
      component: Registration,
    },
    {
      path: "/contact",
      name: "Contact Us",
      component: Contact,
    },
    {
      path:"/users",
      name: "Family Members", 
      component: Users,
    }
  ],
});
