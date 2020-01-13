import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import SignIn from "../views/SignIn.vue";
import Product from "../views/Product.vue"
import Ranking from "../views/Ranking.vue"
import Achievements from "../views/Achievements.vue"

Vue.use(VueRouter);

const routes = [{
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
    path: "/product",
    name: "product",
    component: Product
  },
  {
    path: "/ranking",
    name: "ranking",
    component: Ranking
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