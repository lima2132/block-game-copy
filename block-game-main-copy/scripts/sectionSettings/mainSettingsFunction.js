import {
  menuContainer,
  settingContainer,
  settingsBtn,
  settingsBtnBack,
  mainMenuMusic,
  volumeMusic,
  rangeMusic,
  volumeMusicSpan,
} from "../../dom.js";
import toggleWindows from "../utils/toggleWindows.js";
import volumeSetting from "./volumeSetting.js";
const mainSettingsFunction = function () {
  toggleWindows(settingsBtn, menuContainer, settingContainer);
  toggleWindows(settingsBtnBack, menuContainer, settingContainer);
  volumeMusic.addEventListener("click", (e) => {
    volumeSetting(e, volumeMusic, rangeMusic, volumeMusicSpan, mainMenuMusic);
  });
};

export default mainSettingsFunction;
