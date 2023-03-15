import "../scss/main.scss";
import { createHtml } from "../ts/models/functions/createHtml";
import { toggleLightMode } from "../ts/models/functions/toggleDarkmode";

function init() {
  toggleLightMode();
  createHtml();
}

init();
