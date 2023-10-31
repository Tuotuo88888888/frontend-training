import { getBanners } from "@/api/banner";
export default {
  namespaced: true,
  state: {
    loading: false,
    data: [],
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
    setDataItemLoadStatus(state, index) {
      state.data[index].isLoad = true;
    },
    setDataAllUnLoadStatus(state) {
      for (const item of state.data) {
        item.isLoad = false;
      }
    },
  },
  actions: {
    async fetchBanners(ctx) {
      if (ctx.state.data.length) {
        return;
      }
      ctx.commit("setLoading", true);
      const resp = await getBanners();
      const data = resp.map((i) => ({ ...i, isLoad: false }));
      ctx.commit("setData", data);
      ctx.commit("setLoading", false);
    },
  },
};
