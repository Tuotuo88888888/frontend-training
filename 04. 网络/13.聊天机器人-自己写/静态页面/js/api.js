var API = (function () {
  const BASE_URL = "https://study.duyiedu.com";
  const token = {
    Key: "JWT",
    setToken(token) {
      localStorage.setItem(this.Key, token);
    },
    getToken() {
      return localStorage.getItem(this.Key);
    },
    clearToken() {
      localStorage.removeItem(this.Key);
    },
  };
  const api = {
    async get(url, { headers, ...config } = {}) {
      const defaultConfig = {
        method: "GET",
        headers: {
          authorization: "Bearer " + token.getToken(),
        },
      };
      return fetch(new URL(url, BASE_URL), { ...defaultConfig, ...config });
    },
    async post(url, body, config = {}) {
      const defaultConfig = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + token.getToken(),
        },
        body: JSON.stringify(body),
      };
      return fetch(new URL(url, BASE_URL), { ...defaultConfig, ...config });
    },
  };

  async function reg(userInfo) {
    return await api.post("/api/user/reg", userInfo).then((res) => res.json());
  }

  async function login(loginInfo) {
    const res = await api.post("/api/user/login", loginInfo);
    const results = await res.json();
    if (results.code === 0) {
      token.setToken(res.headers.get("authorization"));
    }
    return results;
  }

  async function exists(loginId) {
    return await api
      .get("/api/user/exists?loginId=" + loginId)
      .then((res) => res.json());
  }

  async function profile() {
    return await api.get("/api/user/profile").then((res) => res.json());
  }

  async function sendChat(content) {
    return await api.post("/api/chat", { content }).then((res) => res.json());
  }

  async function getHistory() {
    return await api.get("/api/chat/history").then((res) => res.json());
  }

  function loginOut() {
    token.clearToken();
  }

  return {
    reg,
    login,
    exists,
    profile,
    sendChat,
    getHistory,
    loginOut,
  };
})();
