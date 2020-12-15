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
    component: Home
  },
  {
    path: "/search/:collection",
    name: "Search",
    props: true,
    component: () =>
      import(/* webpackChunkName: "search-page" */ "../views/SearchPage.vue"),
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
    props: true,
    params: {
      resource: "page"
    }
  },
  {
    path: "*",
    redirect: {
      name: "404",
      params: {
        resource: "page"
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
