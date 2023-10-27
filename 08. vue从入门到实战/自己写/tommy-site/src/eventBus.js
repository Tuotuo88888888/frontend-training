// const listeners = {};
// export default {
//   $on(eventName, handler) {
//     if (!listeners[eventName]) {
//       listeners[eventName] = new Set();
//     }
//     listeners[eventName].add(handler);
//   },
//   $off(eventName, handler) {
//     if (!listeners[eventName]) {
//       return;
//     }
//     listeners[eventName].delete(handler);
//   },
//   $emit(eventName, ...args) {
//     if (listeners[eventName] && listeners[eventName].size) {
//       for (const handler of listeners[eventName]) {
//         handler(...args);
//       }
//     }
//   },
// };

import Vue from "vue";

Vue.prototype.$bus = new Vue({});
