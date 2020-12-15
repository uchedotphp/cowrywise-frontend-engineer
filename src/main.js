import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";

import VueColcade from "vue-colcade";

Vue.use(VueColcade);

import "./assets/css/general-styles.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
