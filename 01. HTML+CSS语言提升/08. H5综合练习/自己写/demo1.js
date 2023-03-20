var doms = {
  video: document.querySelector("video"),
  progress: document.querySelector("#progress"),
  current: document.querySelector("#current"),
  total: document.querySelector("#total"),
};

function main() {
  initPage();
  bindEvents();
}
function initPage() {}
function bindEvents() {
  doms.video.addEventListener("loadeddata", load);
  doms.progress.addEventListener("input", function () {
    console.log(1);
  });
}
function load() {
  var controllers = document.querySelectorAll(".controls");
  controllers.forEach(function (controls) {
    controls.style.display = "block";
  });
  doms.progress.setAttribute("min", 0);
  doms.progress.setAttribute("max", doms.video.duration);
}

function setprogress() {
  doms.progress.value = doms.video.currentTime;
  doms.current.innerText = formatTime(doms.video.currentTime);
  doms.total.innerText = formatTime(doms.video.duration);
}
function formatTime(sec) {
  var hour = Math.floor(sec / 3600);
  sec -= 3600 * hour;
  var minute = Math.floor(sec / 60);
  sec -= 60 * minute;
  sec = Math.floor(sec);
  function _format(n) {
    if (n < 10) {
      n = "0" + n;
    }
    return n;
  }
  return `${_format(hour)}:${_format(minute)}:${_format(sec)}`;
}
main();
