import $ from "jquery";
import styled from "./index.module.less";
import videoUrl from "../assets/movie.mp4";
import audioUrl from "../assets/music.mp3";

function init() {
  const container = $("<div>").addClass(styled.container).appendTo("#app");
  $("<video>")
    .prop({ src: videoUrl, autoplay: true, loop: true, muted: true })
    .appendTo(container);
  const audioElement = $("<audio>")
    .prop({ src: audioUrl, autoplay: true, loop: true })
    .appendTo(container)[0];
  $(document).on("click", () => {
    audioElement.play();
  });
}
init();
