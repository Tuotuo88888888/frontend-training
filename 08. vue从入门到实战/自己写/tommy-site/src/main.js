import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import { showMessage } from "./utils";
import "./mock";

Vue.prototype.$showMessage = showMessage;

import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
