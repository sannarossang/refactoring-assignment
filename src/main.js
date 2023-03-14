import "./scss/main.scss";
import { createHtml } from "./js/createHtml";
import { toggleLightMode } from "./js/toggleDarkmode";

function init() {
  toggleLightMode();
  createHtml();
}

init();
