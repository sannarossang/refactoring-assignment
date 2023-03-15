import { logMessage } from "./logging";

const toggleLightModeButton = document.querySelector(
  ".toggle-btn"
) as HTMLButtonElement;
toggleLightModeButton.addEventListener("click", toggleLightMode);
logMessage(toggleLightModeButton);

export function toggleLightMode() {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    toggleLightModeButton.innerHTML = "Välj mörkt läge";
    logMessage("mörkt läge");
  } else {
    toggleLightModeButton.innerHTML = "Välj ljust läge";
    logMessage("ljust läge");
  }
}

export default toggleLightMode;
