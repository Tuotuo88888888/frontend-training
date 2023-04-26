import { createMovieTags } from "./list";
import { getMovies } from "../api/movie";
import { setMovies } from "./pager";

function init() {
  setMovies(1, 30);
}

init();
