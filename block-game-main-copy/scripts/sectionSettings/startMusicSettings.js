import { volumeMusicSpan, rangeMusic, mainMenuMusic } from "../../dom.js";

const startMusicSettings = function () {
  mainMenuMusic.play();
  mainMenuMusic.volume = 0.2;
  // mainMenuMusic.volume = 0;
  rangeMusic.value = 20;
  volumeMusicSpan.style.width = "20%";
  mainMenuMusic.addEventListener("ended", () => {
    setTimeout(() => {
      mainMenuMusic.play();
    }, 5000);
  });
};
export default startMusicSettings;
