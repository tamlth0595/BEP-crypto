import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Learn from "../views/Learn.vue";
import GameFi from "../views/GameFi.vue";
import Governance from "../views/Governance.vue";
import About from "../views/About.vue";
import Faqs from "../views/Faqs.vue";
import Terms from "../views/Terms.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Who We Are",
    component: Home,
  },
  {
    path: "/learn-play",
    name: "Learn and Play",
    component: Learn,
  },
  {
    path: "/gamefi",
    name: "GameFi",
    component: GameFi,
  },
  {
    path: "/governance",
    name: "DeFi Governance's",
    component: Governance,
  },
  {
    path: "/about",
    name: "About Us",
    component: About,
  },
  {
    path: "/faqs",
    name: "Faqs",
    comoponent: Faqs,
  },
  {
    path: "/terms",
    name: "Terms",
    comoponent: Terms,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
