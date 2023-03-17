import "../scss/main.scss";
import { createHtml } from "../ts/models/functions/createHtml";
import { toggleLightMode } from "../ts/models/functions/toggleDarkmode";

async function init(): Promise<void> {
  toggleLightMode();
  await createHtml();
}

void init();
