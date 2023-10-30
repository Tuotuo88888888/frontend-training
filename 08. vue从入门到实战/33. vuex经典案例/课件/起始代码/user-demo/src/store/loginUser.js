import * as userApi from "@/api/user";

export default {
  namespaced: true,
  strict: true,
  state: {
    loading: false,
    data: null,
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async asyncLogin({ commit }, { loginId, loginPwd }) {
      commit("setLoading", true);
      const resp = await userApi.login(loginId, loginPwd);
      commit("setLoading", false);
      commit("setData", resp);
      return resp;
    },
    async asyncLoginOut({ commit }) {
      commit("setLoading", true);
      await userApi.loginOut();
      commit("setLoading", false);
      commit("setData", null);
    },
    async asyncWhoAmI({ commit }) {
      commit("setLoading", true);
      const resp = await userApi.whoAmI();
      commit("setLoading", false);
      commit("setData", resp);
    },
  },
  getters: {
    status({ loading, data }) {
      if (loading) {
        return "loading";
      } else if (data) {
        return "load";
      } else {
        return "unload";
      }
    },
  },
};
