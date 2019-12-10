import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import SignIn from "../views/SignIn.vue";
import Rankings from "../components/Rankings.vue";
import Ranking2 from "../components/Ranking2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn
  },
  {
    path: "/rankings",
    name: "rankings",
    component: Rankings
  },
  {
    path: "/ranking2",
    name: "ranking2",
    component: Ranking2
  }
];

const router = new VueRouter({
  routes
});

export default router;
