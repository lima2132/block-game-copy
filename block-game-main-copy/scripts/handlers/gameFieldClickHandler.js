import { gameState } from "../state/gameState.js";
import playSound from "../sectionSettings/playSound.js";
const validateIsDisabledBlock = function (gameBlock) {
  gameBlock.forEach((block) => {
    if (block.classList.length === 2) block.disabled = true;
  });
};

const isNotColorMatch = function (gameBlock) {
  gameBlock.forEach((block) => {
    if (block.classList.length < 2) {
      block.disabled = true;
    }
  });

  setTimeout(() => {
    gameState.currentEl.forEach((el) => el.classList.remove(el.dataset.color));

    gameBlock.forEach((block) => {
      if (block.classList.length < 2) {
        block.disabled = false;
      }
    });
    gameState.currentEl.splice(0);
  }, 200);
};

const gameFieldClickHandler = function (e) {
  e.preventDefault();

  const sound = playSound();

  const gameBlock = document.querySelectorAll(".game-field__block");

  if (!e.target.classList.contains("game-field__block")) return;
  console.log(gameState);
  const targetEl = e.target;
  const dataColor = targetEl.dataset.color;

  // console.log(currentEl);

  if (gameState.currentEl.length <= 2) {
    gameState.currentEl.push(targetEl);
    targetEl.classList.add(dataColor);
    targetEl.disabled = true;
  }

  if (gameState.currentEl.length >= 2) {
    validateIsDisabledBlock(gameBlock);
    if (
      gameState.currentEl[0].dataset.color !==
      gameState.currentEl[1].dataset.color
    ) {
      isNotColorMatch(gameBlock);
    } else {
      gameState.count += 1;
      sound.trueBlock();
      validateIsDisabledBlock(gameBlock);

      setTimeout(() => {
        gameState.currentEl.forEach((el) => (el.style.opacity = 0));
        gameState.currentEl.splice(0);
      }, 200);
    }
  }
};

export default gameFieldClickHandler;
