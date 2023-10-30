const $store = {
  state: {
    loading: false,
  },
};
function mapState(obj) {
  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    newObj[key] = value.bind(this, $store.state);
  }
  return newObj;
}
const computed = mapState({
  loading(state) {
    return state.loading;
  },
});
console.log(computed.loading());
