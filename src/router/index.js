import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import SignIn from "../views/SignIn.vue";
import Rankings from "../components/Rankings.vue";
import Ranking2 from "../views/Ranking2.vue";
import Achievements from "../views/Achievements.vue";

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
  },
  {
    path: "/achievements",
    name: "achievements",
    component: Achievements
  }
];

const router = new VueRouter({
  routes
});

export default router;
