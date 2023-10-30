import VueRouter from "vue-router";
import routes from "./routes";
import Vue from "vue";
import store from "@/store";
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach(function(to, from, next) {
  if (to.meta.auth) {
    const status = store.getters["loginUser/status"];
    if (status === "loading") {
      return next({
        path: "/loading",
        query: { redirect: to.path }, //to.fullPath
      });
    } else if (status === "unload") {
      alert("你没有登录，请先登录");
      return next({
        path: "/login",
        query: { redirect: to.path }, //to.fullPath
      });
    }
  }
  next();
});

export default router;
