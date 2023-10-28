import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import defaultGif from "@/assets/default.gif";

let imgs = [];

function setImage(img) {
  img.dom.src = defaultGif;
  const clientHeight = document.documentElement.clientHeight;
  const rect = img.dom.getBoundingClientRect();
  const height = rect.height || 100;
  if (rect.top >= -height && rect.top <= clientHeight) {
    const tempImg = new Image();
    tempImg.src = img.src;
    tempImg.onload = function () {
      img.dom.src = tempImg.src;
    };
    imgs = imgs.filter((i) => i !== img);
  }
}

function setImages() {
  for (const img of imgs) {
    setImage(img);
  }
}

function handleScroll() {
  setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
  inserted(el, binding) {
    const img = {
      dom: el,
      src: binding.value,
    };
    imgs.push(img);
    setImage(img);
  },
  unbind(el) {
    imgs = imgs.filter((img) => img.dom !== el);
  },
};
