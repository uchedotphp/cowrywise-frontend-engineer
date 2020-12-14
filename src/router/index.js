import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../components/Error.vue";
import NetworkError from "../components/NetworkError.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetworkError
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    props: true
  },
  {
    path: "*",
    redirect: {
      name: "404",
      params: {
        resource: "page"
      },
    },
  },
  // {
  //   path: "*",
  //   name: "Error",
  //   component: () =>
  //     import(/* webpackChunkName: "not-found" */ "../views/NotFound.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
