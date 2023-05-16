import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import { showMessage } from "./utils";
import "./mock";

import { getBanners } from "./api/banner";
(async function () {
  console.log(await getBanners());
})();

Vue.prototype.$showMessage = showMessage;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
