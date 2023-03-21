var doms = {
  controllers: document.querySelectorAll(".controls"),
  video: document.querySelector("video"),
  btnPlay: document.querySelector("#btnPlay"),
  progress: document.querySelector("#progress"),
  current: document.querySelector("#current"),
  total: document.querySelector("#total"),
  rates: document.querySelectorAll("#rate button"),
  volume: document.querySelector("#volume input"),
  volumeSpan: document.querySelector("#volume span"),
  saveBtn: document.querySelector("#save"),
  loadBtn: document.querySelector("#load"),
};

function main() {
  initPage();
  bindEvents();
}
function initPage() {}
function bindEvents() {
  doms.video.addEventListener("loadeddata", load);
  doms.video.addEventListener("timeupdate", setProgress);
  doms.btnPlay.addEventListener("click", playOrPause);
  doms.progress.addEventListener("input", function () {
    doms.video.currentTime = doms.progress.value;
    setProgress();
  });
  doms.rates.forEach(function (rate) {
    rate.addEventListener("click", function () {
      doms.video.defaultPlaybackRate = +rate.dataset.rate;
      setRate();
    });
  });
  doms.volume.addEventListener("input", function () {
    doms.video.volume = doms.volume.value / 100;
    setVolume();
  });
  doms.saveBtn.addEventListener("click", saveControls);
  doms.loadBtn.addEventListener("click", loadControls);
}
function load() {
  doms.progress.setAttribute("min", 0);
  doms.progress.setAttribute("max", doms.video.duration);
  input();
  doms.controllers.forEach(function (controls) {
    controls.style.display = "block";
  });
}

function playOrPause() {
  if (doms.video.paused) {
    doms.video.play();
  } else {
    doms.video.pause();
  }
}
function setProgress() {
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
function setRate() {
  doms.rates.forEach(function (rate) {
    if (+rate.dataset.rate === doms.video.defaultPlaybackRate) {
      rate.classList.add("active");
    } else {
      rate.classList.remove("active");
    }
  });
}
function setVolume() {
  var currentVolume = Math.floor(doms.video.volume * 100);
  if (doms.video.muted) {
    currentVolume = 0;
  }
  doms.volume.value = currentVolume;
  doms.volumeSpan.innerText = currentVolume + "%";
}
function saveControls() {
  var controlsObj = {
    progress: doms.video.currentTime,
    rate: doms.video.defaultPlaybackRate,
    volume: doms.video.muted ? 0 : doms.video.volume,
  };
  var controlsJson = JSON.stringify(controlsObj);
  localStorage.setItem("controls", controlsJson);
  alert("保存设置成功");
}
function loadControls() {
  var controlsJson = localStorage.getItem("controls");
  if (controlsJson) {
    var controlsObj = JSON.parse(controlsJson);
    doms.video.currentTime = controlsObj.progress;
    doms.video.defaultPlaybackRate = controlsObj.rate;
    doms.video.volume = controlsObj.volume;
    input();
    doms.video.play();
  }
}
function input() {
  setProgress();
  setRate();
  setVolume();
}
main();
