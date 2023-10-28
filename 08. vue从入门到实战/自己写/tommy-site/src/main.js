import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import { showMessage } from "./utils";
import "./mock";
// import { default as $bus } from "./eventBus";
// window.$bus = $bus;
import "./eventBus";

Vue.prototype.$showMessage = showMessage;

import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);
import vLazy from "./directives/lazy";
Vue.directive("lazy", vLazy);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
