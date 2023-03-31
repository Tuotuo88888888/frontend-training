const BASE = "https://study.duyiedu.com";
const api = {
  get(url, config = {}) {
    const defaultConfig = {
      method: "GET",
    };
    return fetch(BASE + url, { ...defaultConfig, ...config });
  },
  post(url, body, config = {}) {
    const defaultConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    return fetch(BASE + url, { ...defaultConfig, ...config });
  },
};
async function reg(userInfo) {
  try {
    const res = await api.post("/api/user/reg", userInfo);
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

function login(loginInfo) {}

function exists(loginId) {}

function profile() {}

function sendChat(content) {}

function getHistory() {}
