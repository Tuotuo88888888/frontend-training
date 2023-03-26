/**
 * 从网络获取歌词数据
 * @returns Promise
 */
async function getLrc() {
  return await fetch("https://study.duyiedu.com/api/lyrics")
    .then((resp) => resp.json())
    .then((resp) => resp.data);
}

(function () {
  const dom = {
    box: document.querySelector(".container .box"),
    audio: document.querySelector("audio"),
    ul: document.querySelector(".box ul"),
  };
  const size = {
    boxClientHeight: dom.box.clientHeight,
    liHeight: 30,
  };
  let secondArr = [];

  function main() {
    bindEvents();
  }
  function bindEvents() {
    dom.audio.addEventListener("loadeddata", audioLoad);
    dom.audio.addEventListener("timeupdate", function (e) {
      setStatus(this.currentTime);
    });
  }
  async function audioLoad() {
    dom.ul.innerHTML = "";
    try {
      const data = await getLrc();
      const lineData = data.split("\n").filter((i) => i);
      const arr = lineData.map((i) => {
        const line = i.split("]");
        const lineLeft = line[0].replace("[", "").split(":");
        const second = lineLeft[0] * 60 + +lineLeft[1];
        const word = line[1];
        return { second, word };
      });
      dom.ul.innerHTML = arr.map((i) => `<li>${i.word}</li>`).join("\n");
      secondArr = arr.map((i) => i.second);
      size.liHeight = dom.ul.children[0].offsetHeight;
    } catch (e) {
      dom.ul.innerHTML = `<li class="active">${e.message}</li>`;
    }
  }

  function setStatus(currentTime) {
    const curIndex = secondArr.findIndex((e) => currentTime < e) - 1;
    if (curIndex < 0) {
      return;
    }
    const activeLi = dom.ul.querySelector(".active");
    if (activeLi) {
      activeLi.className = "";
    }
    const currentLi = dom.ul.children[curIndex];
    if (currentLi) {
      currentLi.className = "active";
    }
    let y =
      curIndex * size.liHeight - (size.boxClientHeight / 2 - size.liHeight / 2);
    if (y < 0) {
      y = 0;
    }
    dom.ul.style.transform = `translateY(-${y}px)`;
  }
  main();
})();
