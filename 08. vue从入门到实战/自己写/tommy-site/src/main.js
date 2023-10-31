import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import store from "./store";
import { showMessage } from "./utils";
import "./mock";
// import { default as $bus } from "./eventBus";
// window.$bus = $bus;
import "./eventBus";

store.dispatch("setting/fetchSetting");
Vue.prototype.$showMessage = showMessage;

import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);
import vLazy from "./directives/lazy";
Vue.directive("lazy", vLazy);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
