import { menuContainer, gameContainer, playBtn } from "../dom.js";

const selectPlayGame = function (game) {
  playBtn.addEventListener("click", () => {
    menuContainer.classList.toggle("hide");
    gameContainer.classList.toggle("hide");

    game();
  });
};
export default selectPlayGame;
