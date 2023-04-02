const BASE = "https://study.duyiedu.com";
function setToken(token) {
  console.log(token);
  localStorage.setItem("jwt", token);
}
function getToken() {
  return localStorage.getItem("jwt");
}
const api = {
  get(url, config = {}) {
    const defaultConfig = {
      method: "GET",
      headers: {
        authorization: "Bearer " + getToken(),
      },
    };
    return fetch(new URL(url, BASE), { ...defaultConfig, ...config });
  },
  post(url, body, config = {}) {
    const defaultConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + getToken(),
      },
      body: JSON.stringify(body),
    };
    return fetch(new URL(url, BASE), { ...defaultConfig, ...config });
  },
};
async function reg(userInfo) {
  const res = await api.post("/api/user/reg", userInfo);
  const data = await res.json();
  return data;
}

async function login(loginInfo) {
  const res = await api.post("/api/user/login", loginInfo);
  const data = await res.json();
  if (data.code === 0) {
    setToken(res.headers.get("authorization"));
    return true;
  }
  return false;
}

async function exists(loginId) {
  const res = await api.get("/api/user/exists", loginId);
  const data = await res.json();
  return data;
}

async function profile() {
  const res = await api.get("/api/user/profile");
  const data = await res.json();
  return data;
}

async function sendChat(content) {
  const res = await api.post("/api/chat", { content });
  const data = await res.json();
  return data;
}

async function getHistory() {
  const res = await api.get("/api/chat/history");
  const data = await res.json();
  return data;
}
