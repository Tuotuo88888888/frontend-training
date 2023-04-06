const loginIdValidator = new FieldValidator("txtLoginId", async function (val) {
  if (!val) {
    return "请填写账号";
  }
});

const loginPwdValidator = new FieldValidator("txtLoginPwd", function (val) {
  if (!val) {
    return "请填写密码";
  }
});

const userform = $(".user-form");
userform.addEventListener("submit", async function (e) {
  e.preventDefault();
  const result = await FieldValidator.validate(
    loginIdValidator,
    loginPwdValidator
  );
  if (!result) {
    return;
  }
  const formData = new FormData(userform);
  const data = Object.fromEntries(formData.entries());
  const resp = await API.login(data);
  if (resp.code === 0) {
    alert("登录成功，点击确定，跳转到首页");
    location.href = "./index.html";
  } else {
    alert("登录失败，请检查账号和密码");
    loginPwdValidator.input.value = "";
    loginIdValidator.p.innerHTML = "账号或密码错误";
  }
});
