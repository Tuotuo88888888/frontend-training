import $ from "jquery";
import styled from "./index.module.less";

let container;
/**
 * 初始化函数，负责创建容器
 */
function init() {
  container = $("<div>").addClass(styled.container).appendTo("#app");
}
init();

/**
 * 根据传入的电影数组，创建元素，填充到容器中
 * @params movies 电影数组
 */
export function createMovieTags(movies) {
  const html = movies
    .map((i) => {
      return `<div>
        <a href="${i.url}" target="_blank"><img src="${i.cover}"/></a>
        <a href="${i.url}" class="${styled.title}" target="_blank"><p>${i.title}</p></a>
        <p class="${styled.rate}">${i.rate}</p>
        </div>`;
    })
    .join("");
  container.html(html);
}
