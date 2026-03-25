import { gameState } from "./state/gameState.js";
import gameFieldClickHandler from "./handlers/gameFieldClickHandler.js";

const gameImplementation = function (gameField) {
  const gameFieldBlocks = document.querySelectorAll(".game-field__block");

  // const timer = createGameTimer();
  gameState.count = 0;
  gameState.currentEl.splice(0);

  gameFieldBlocks.forEach((block) => {
    block.classList.remove(block.dataset.color);
    block.disabled = false;
  });

  gameState.timer.start();

  gameField.addEventListener("click", gameFieldClickHandler);
};

export default gameImplementation;
