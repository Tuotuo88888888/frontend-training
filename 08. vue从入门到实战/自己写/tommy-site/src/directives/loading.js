import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
function getLoadingImage(el) {
  return el.querySelector("img[data-role=loading]");
}
function createLoadingImage() {
  const img = document.createElement("img");
  img.src = loadingUrl;
  img.dataset.role = "loading";
  img.className = styles.loading;
  return img;
}
export default function (el, binding) {
  const curImg = getLoadingImage(el);
  if (binding.value) {
    if (!curImg) {
      const img = createLoadingImage();
      el.appendChild(img);
    }
  } else {
    if (curImg) {
      curImg.remove();
    }
  }
}
