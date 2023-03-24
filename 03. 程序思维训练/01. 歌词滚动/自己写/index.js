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
  const audio = document.querySelector("audio");
  const ul = document.querySelector(".box ul");
  function main() {
    bindEvents();
  }
  function bindEvents() {
    audio.addEventListener("loadeddata", audioLoad);
  }
  async function audioLoad() {
    ul.innerHTML = "";
    try {
      const data = await getLrc();
      const lineData = data.split("\n");
      const arr = lineData.slice(1).map((i) => {
        const line = i.split("]");
        const lineLeft = line[0].substring(1).split(/:|\./);
        const second =
          lineLeft[0] * 60 * 1000 + lineLeft[1] * 1000 + +lineLeft[2];
        const word = line[1];
        return { second, word };
      });
      ul.innerHTML = arr.map((i) => `<li>${i.word}</li>`).join("\n");
      const secondArr = arr.map((i) => i.second);
      audio.addEventListener("timeupdate", function ({ timeStamp }) {
        console.log(timeStamp);
        const curIndex = secondArr.findIndex(
          (e, i, arr) => timeStamp > e && timeStamp < arr[i + 1]
        );
        const activeLi = ul.querySelector(".active");
        if (activeLi) {
          activeLi.className = "";
        }
        ul.children[curIndex].className = "active";
        ul.style.marginTop = `-${curIndex * 30}px`;
      });
    } catch (e) {
      ul.innerHTML = `<li class="active">${e.message}</li>`;
    }
  }
  main();
})();
