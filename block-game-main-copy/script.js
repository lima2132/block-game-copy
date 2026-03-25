"use strict";
import selectPlayGame from "./scripts/selectPlayGame.js";
import clickModalMenu from "./scripts/modalFunctions/clickModalMenu.js";
import { multyColorArr } from "./scripts/data/dataColors.js";
import gameImplementation from "./scripts/gameImplementation.js";
import clickModalRestart from "./scripts/modalFunctions/clickModalRestart.js";
import { gameTimer, gameTimerGroup, gameFieldDOM } from "./dom.js";
import mainSettingsFunction from "./scripts/sectionSettings/mainSettingsFunction.js";
import playSound from "./scripts/sectionSettings/playSound.js";
import menuBarFunction from "./scripts/menuBarFunction/menuBarFunction.js";
import { gameState } from "./scripts/state/gameState.js";
import createGameTimer from "./scripts/utils/createGameTimer.js";
import languageBtn from "./scripts/sectionSettings/languageBtn.js";
import changeLanguage from "./scripts/utils/changeLanguage.js";
import formFunction from "./scripts/formFunction/formFunction.js";
import startMusicSettings from "./scripts/sectionSettings/startMusicSettings.js";
const randomIndex = (arr) => Math.floor(Math.random() * arr.length);
gameState.timer = createGameTimer();
let lang = gameState.currentLang;
let timeoutId;

const getRandomColorsArray = function () {
  let randomPlaceColorsArray = [];

  for (let i = multyColorArr.length - 1; i >= 0; i--) {
    let j = randomIndex(multyColorArr);
    [multyColorArr[i], multyColorArr[j]] = [multyColorArr[j], multyColorArr[i]];
  }
  randomPlaceColorsArray.push(...multyColorArr);
  return randomPlaceColorsArray;
};

const createGameField = function () {
  for (let i = 0; i < multyColorArr.length; i++) {
    const block = document.createElement("button");
    block.classList.add("game-field__block");
    gameFieldDOM.appendChild(block);
  }
};

const addAttributFieldBlock = function (randomColor) {
  const fieldBlock = document.querySelectorAll(".game-field__block");
  fieldBlock.forEach((el, index) => {
    el.dataset.color = randomColor[index];
    el.dataset.id = index;
  });
};

const startGameState = function () {
  clearInterval(timeoutId);
  gameTimer.textContent = "0:30";
  gameFieldDOM.innerHTML = "";
  gameTimerGroup.style.transform = `translateX(0%)`;
  const randomColorArr = getRandomColorsArray();
  createGameField();
  addAttributFieldBlock(randomColorArr);

  const gameFieldBlocks = document.querySelectorAll(".game-field__block");
  gameFieldBlocks.forEach((block) => {
    block.classList.add(block.dataset.color);
    block.disabled = true;
  });
};

const game = function () {
  const sound = playSound();

  sound.start();
  startGameState();
  timeoutId = setTimeout(() => {
    gameImplementation(gameFieldDOM);
  }, 3000);
};

playSound();
selectPlayGame(game);
clickModalMenu();
clickModalRestart(game);
mainSettingsFunction();
menuBarFunction(timeoutId);
changeLanguage(lang);
languageBtn();
formFunction();
export default game;
