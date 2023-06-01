import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import { showMessage } from "./utils";
import "./mock";

Vue.prototype.$showMessage = showMessage;

import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);

import request from "./api/request";

request.get("/api/blogtype").then((r) => console.log(r));
request
  .get("/api/blog", {
    params: {
      page: 1,
      limit: 10,
      categoryid: -1,
    },
  })
  .then((r) => console.log(r));

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
