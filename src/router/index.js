import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import SignIn from "../views/SignIn.vue";
import Product from "../views/Product.vue";
import Security from "../views/Security.vue";
import Catalog from "../views/Catalog.vue";
import Ranking from "../views/Ranking.vue"
import Achievements from "../views/Achievements.vue"
import Profile from '../views/Perfil.vue'
import Checkout from '../views/Checkout.vue'
import HomeManager from '../views/HomeManager.vue'

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
    path: "/product/:_id",
    name: "product",
    component: Product
  },
  {
    path: "/security",
    name: "security",
    component: Security
  },
  {
    path: "/catalog",
    name: "catalog",
    component: Catalog

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
  },
  {
    path: "/profile/:_id",
    name: "profile",
    component: Profile
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout
  },
  {
    path: "/homeManager",
    name: "homeManager",
    component: HomeManager
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;