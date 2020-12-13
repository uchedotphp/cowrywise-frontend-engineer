import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/PhotoContainer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "*",
    name: "Error",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
