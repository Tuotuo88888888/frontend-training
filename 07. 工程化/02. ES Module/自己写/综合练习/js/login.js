import * as doms from "./doms.js";
import { login as apiLogin } from "./api/user.js";

let isLogging = false;
function setLogging(val) {
  isLogging = val;
  if (val) {
    doms.btnSubmit.value = "登录中...";
  } else {
    doms.btnSubmit.value = "登录";
  }
}
export async function login() {
  if (isLogging) {
    return;
  }
  setLogging(true);
  const loginId = doms.userName.value;
  const loginPwd = doms.userPassword.value;

  if (!loginId) {
    alert("请输入用户名！");
    return setLogging(false);
  }
  if (!loginPwd) {
    alert("请输入密码！");
    return setLogging(false);
  }

  const resp = await apiLogin(loginId, loginPwd);
  if (resp) {
    alert(`登录成功，欢迎你，${resp.nickname}！`);
  } else {
    alert("登录失败！");
  }
  setLogging(false);
}
