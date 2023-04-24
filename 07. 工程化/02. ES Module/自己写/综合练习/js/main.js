import { formContainer } from "./doms.js";
import { login } from "./login.js";

formContainer.addEventListener("submit", function (e) {
  e.preventDefault();
  login();
});
