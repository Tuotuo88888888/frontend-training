import $ from "jquery";
import styled from "./index.module.less";
import videoUrl from "../assets/movie.mp4";
import audioUrl from "../assets/music.mp3";

function init() {
  const container = $("<div>").addClass(styled.container).appendTo("#app");
  const vid = $("<video>")
    .prop({ src: videoUrl, autoplay: true, loop: true, muted: true })
    .appendTo(container);
  const aud = $("<audio>")
    .prop({ src: audioUrl, autoplay: true, loop: true })
    .appendTo(container);
  // $(document).one("click", () => {
  //   aud[0].play();
  // });
  $("<h1>").text("豆瓣电影").appendTo(container);

  $(window).on("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const vHeight = document.documentElement.clientHeight;
    if (scrollTop >= vHeight) {
      vid[0].pause();
      aud[0].pause();
    } else {
      vid[0].play();
      aud[0].play();
    }
  });
}
init();
