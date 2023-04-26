import $ from "jquery";
import styled from "./index.module.less";
import { getMovies } from "@/api/movie";
import { createMovieTags } from "../list";

let container;
/**
 * 初始化函数，负责创建容器
 */
function init() {
  container = $("<div>").addClass(styled.pager).appendTo("#app");
}

init();

/**
 * 根据传入的页码、页容量、总记录数，创建分页区域的标签
 * @params page 页码
 * @params limit 页容量
 * @params total 总页数
 */
export function createPagers(page, limit, total) {
  container.empty();
  /**
   * 辅助函数，负责帮忙创建一个页码标签
   * @params text 标签的文本
   * @params status 标签的状态，空字符串-普通状态，disabled-禁用状态，active-选中状态
   */
  function createTag(text, status, targetPage) {
    const span = $("<span>").text(text).appendTo(container);
    span.addClass(styled[status]);

    if (status === "") {
      span.on("click", function () {
        setMovies(targetPage, limit);
      });
    }
  }

  const pageNumber = Math.ceil(total / limit);
  //1. 创建首页标签
  createTag("|<<", page === 1 ? "disabled" : "", 1);
  //2. 创建上一页标签
  createTag("<<", page === 1 ? "disabled" : "", page - 1);
  //3. 创建数字页码标签
  const maxCount = 10;
  let min = Math.floor(page - maxCount / 2);
  min < 1 && (min = 1);
  let max = min + maxCount - 1;
  max > pageNumber && (max = pageNumber);
  for (let i = min; i <= max; i++) {
    createTag(i, page === i ? "active" : "", i);
  }

  //4. 创建下一页标签
  createTag(">>", page === pageNumber ? "disabled" : "", page + 1);
  //5. 创建尾页标签
  createTag(">>|", page === pageNumber ? "disabled" : "", pageNumber);
}

export async function setMovies(targetPage, limit) {
  const resp = await getMovies(targetPage, limit);
  createMovieTags(resp.data.movieList);
  createPagers(targetPage, limit, resp.data.movieTotal);
}
