export async function login(loginId, loginPwd) {
  const resp = await fetch("https://study.duyiedu.com/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ loginId, loginPwd }),
  }).then((resp) => resp.json());
  return resp.data;
}
