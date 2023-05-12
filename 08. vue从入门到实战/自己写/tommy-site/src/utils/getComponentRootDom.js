import Vue from "vue";
export default function (component, props) {
  const vm = new Vue({
    render: (h) => h(component, { props }),
  }).$mount("");
  return vm.$el;
}
