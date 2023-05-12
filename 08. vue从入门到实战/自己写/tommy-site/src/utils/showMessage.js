import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型  info  error  success  warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 */
export default function ({
  content = "",
  type = "info",
  duration = 2000,
  container = document.body,
  callback,
} = {}) {
  const div = document.createElement("div");
  const iconDom = getComponentRootDom(Icon, { type });
  container.appendChild(div);
  div.innerHTML = `<span class=${styles.icon}>${iconDom.outerHTML}</span><div>${content}</div>`;
  div.classList.add(...[styles.message, styles[`message-${type}`]]);
  if (getComputedStyle(container).position === "static") {
    container.style.position = "relative";
  }
  div.clientWidth;

  div.style.transform = "translate(-50%, -50%)";
  div.style.opacity = 1;

  setTimeout(() => {
    div.style.transform = "translate(-50%, -50%) translateY(-25px)";
    div.style.opacity = 0;
    div.addEventListener(
      "transitionend",
      function () {
        div.remove();
        callback && callback();
      },
      { once: true }
    );
  }, duration);
}
