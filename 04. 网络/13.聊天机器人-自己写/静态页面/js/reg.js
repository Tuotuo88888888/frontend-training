const loginIdValidator = new FieldValidator("txtLoginId", async function (val) {
  if (!val) {
    return "请填写账号";
  }
  const exists = await API.exists(val);
  if (!exists.data) {
    return "该账号已被占用，请重新选择一个账号名";
  }
});

const nicknameValidator = new FieldValidator("txtNickname", function (val) {
  if (!val) {
    return "请填写昵称";
  }
});

const loginPwdValidator = new FieldValidator("txtLoginPwd", function (val) {
  if (!val) {
    return "请填写密码";
  }
});

const loginPwdConfirmValidator = new FieldValidator(
  "txtLoginPwdConfirm",
  function (val) {
    if (!val) {
      return "请填写确认密码";
    }
    if (loginPwdValidator.input.value !== val) {
      return "两次密码不一致";
    }
  }
);

const userform = $(".user-form");
userform.addEventListener("submit", async function (e) {
  e.preventDefault();
  const result = await FieldValidator.validate(
    loginIdValidator,
    nicknameValidator,
    loginPwdValidator,
    loginPwdConfirmValidator
  );
  if (result) {
    const formData = new FormData(userform);

    API.reg({});
  }
});
