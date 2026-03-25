import { menuContainer, gameContainer } from '../../dom.js';
import { gameState } from '../state/gameState.js';
import game from '../../script.js';
const menuBarFunction = function (timeoutId) {
	const gameBarContainer = document.querySelector('.game-bar');
	console.log(timeoutId);

	gameBarContainer.addEventListener('click', e => {
		e.preventDefault();
		const targetEl = e.target;
		const btn = e.target.closest('.game-bar__btn');
		if (!btn) return;

		if (targetEl.closest('.game-bar__menu')) {
			gameState.timer.stop();
			gameState.timer.reset();

			menuContainer.classList.toggle('hide');
			gameContainer.classList.toggle('hide');
		}
		if (targetEl.closest('.game-bar__reset')) {
			gameState.timer.stop();
			gameState.timer.reset();
			game();
		}
		if (targetEl.closest('.game-bar__music')) {
			document.querySelector('.game-bar__music').classList.toggle('opacity');
		}
		if (targetEl.closest('.game-bar__volume')) {
			document.querySelector('.game-bar__volume').classList.toggle('opacity');
		}
	});
};

export default menuBarFunction;
