import axios from "axios";
import { showMessage } from "../utils";

const ins = axios.create({});
// 添加响应拦截器
ins.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.code !== 0) {
      showMessage({
        content: response.data.msg,
        type: "error",
        duration: 1500,
      });
      return null;
    }
    return response.data.data;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    showMessage({ content: error.message, type: "error" });
    return null;
  }
);
export default ins;
