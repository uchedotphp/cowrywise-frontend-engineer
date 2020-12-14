import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../components/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    props: true,
    params: {
      resource: "page",
    },
  },
  {
    path: "*",
    redirect: {
      name: "404",
      params: {
        resource: "page",
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
