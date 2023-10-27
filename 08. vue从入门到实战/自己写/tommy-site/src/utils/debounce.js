export default function debounce(fn, duration = 1000) {
  let timer = null;
  return function (...args) {
    const that = this;
    clearTimeout(timer);
    timer = setTimeout(fn.bind(that, ...args), duration);
  };
}
