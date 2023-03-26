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

  function main() {
    bindEvents();
  }
  function bindEvents() {
    dom.audio.addEventListener("loadeddata", audioLoad);
  }
  async function audioLoad() {
    dom.ul.innerHTML = "";
    try {
      const data = await getLrc();
      const lineData = data.split("\n");
      const arr = lineData.slice(1).map((i) => {
        const line = i.split("]");
        const lineLeft = line[0].substring(1).split(/:|\./);
        const second = lineLeft[0] * 60 + +lineLeft[1] + lineLeft[2] / 1000;
        const word = line[1];
        return { second, word };
      });
      dom.ul.innerHTML = arr.map((i) => `<li>${i.word}</li>`).join("\n");
      const secondArr = arr.map((i) => i.second);
      const boxClientHeight = dom.box.clientHeight;
      const liHeight = dom.ul.children[0].offsetHeight;
      dom.audio.addEventListener("timeupdate", function (e) {
        const { currentTime } = dom.audio;
        const curIndex = secondArr.findIndex(
          (e, i, arr) => currentTime > e && currentTime < arr[i + 1]
        );
        const activeLi = dom.ul.querySelector(".active");
        if (activeLi) {
          activeLi.className = "";
        }
        const currentLi = dom.ul.children[curIndex];
        if (currentLi) {
          currentLi.className = "active";
        }
        let y = curIndex * liHeight - (boxClientHeight / 2 - liHeight / 2);
        if (y < 0) {
          y = 0;
        }
        dom.ul.style.transform = `translateY(-${y}px)`;
      });
    } catch (e) {
      dom.ul.innerHTML = `<li class="active">${e.message}</li>`;
    }
  }
  main();
})();
