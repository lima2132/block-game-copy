import {
  gameTimer,
  modalContainer,
  overflow,
  modalResult,
  gameTimerGroup,
  modalTimeSpan,
} from "../../dom.js";
import { gameState } from "../state/gameState.js";
import endGame from "./endGame.js";
import playSound from "../sectionSettings/playSound.js";
import { translate } from "../data/translate.js";

// const createGameTimer = function () {
// 	let seconds = 30;
// 	let minutes = 0;
// 	let intervalId = null;

// 	let width = 100;
// 	let precent = 100 / 30;

// 	const render = () => (gameTimer.textContent = `${minutes}:${seconds}`);

// 	const sound = playSound();

// 	const tick = () => {
// 		if (seconds === 60) {
// 			minutes++;
// 		}
// 		if (gameState.count === 9) {
// 			stop();
// 			modalResult.textContent = translate[gameState.currentLang].win;
// 			modalTimeSpan.textContent = `${minutes}:${seconds}`;
// 			endGame(modalContainer, overflow);
// 			sound.win();
// 			reset();
// 			console.log(performance.now());
// 			return;
// 		}
// 		seconds--;
// 		width = width - precent;
// 		gameTimerGroup.style.width = `${width}%`;
// 		if (seconds === 0) {
// 			stop();
// 			modalResult.textContent = translate[gameState.currentLang].loze;
// 			modalTimeSpan.textContent = `${minutes}:${seconds}`;
// 			endGame(modalContainer, overflow);
// 			sound.loze();
// 			reset();
// 			return;
// 		}

// 		render();
// 	};

// 	const start = () => {
// 		if (intervalId) return;
// 		intervalId = setInterval(tick, 1000);
// 	};

// 	const stop = () => {
// 		clearInterval(intervalId);
// 		intervalId = null;
// 	};

// 	const reset = () => {
// 		minutes = 0;
// 		seconds = 30;
// 		width = 100;
// 		intervalId = null;
// 	};

// 	return { start, stop, reset };
// };

// export default createGameTimer;
const createGameTimer = function () {
  const sound = playSound();
  const duration = 10;
  let startTime = null;
  let animationId = null;
  let isRunning = false;
  let pauseTime = 0;
  let progress = 0;
  let remaining = 0;
  let percent = 0;
  const animate = function (timestamp) {
    if (startTime === null) startTime = timestamp - pauseTime;
    progress = Math.min((timestamp - startTime) / 1000, duration);
    remaining = Math.max(duration - progress, 0);
    percent = (progress / duration) * 100;
    if (remaining > 0) {
      animationId = requestAnimationFrame(animate);
      gameTimer.textContent = `00:${remaining.toFixed(0)}`;
      gameTimerGroup.style.transform = `translateX(${-percent}%)`;
    }
    if (gameState.count === 9) {
      stop();

      setTimeout(() => {
        endGame(modalContainer, overflow);

        sound.win();
        gameState.count = 0;
      }, 400);
      modalResult.textContent = translate[gameState.currentLang].win;
      modalTimeSpan.textContent = `Ваше время: ${progress.toFixed(2)}`;
      reset();
    }
    if (remaining <= 0) {
      stop();
      setTimeout(() => {
        endGame(modalContainer, overflow);
        modalResult.textContent = translate[gameState.currentLang].loze;
        modalTimeSpan.textContent = "";

        sound.loze();
      }, 400);
      reset();
    }
  };

  const start = () => {
    if (isRunning) return;
    isRunning = true;
    startTime = null;
    animationId = requestAnimationFrame(animate);
  };

  const stop = () => {
    if (isRunning) isRunning = false;
    pauseTime = performance.now() - startTime;
    cancelAnimationFrame(animationId);
    animationId = null;
  };

  const reset = () => {
    pauseTime = 0;
    startTime = null;
    progress = 0;
    animationId = null;
    isRunning = false;
  };

  return { start, stop, reset };
};

export default createGameTimer;
