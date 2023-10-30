import Vue from "vue";
import Vuex from "vuex";
import loginUser from "./loginUser";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: { loginUser },
});

export default store;
