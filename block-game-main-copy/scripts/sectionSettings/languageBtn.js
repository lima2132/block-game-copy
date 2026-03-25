import { rusBtn, engBtn } from '../../dom.js';
import { gameState } from '../state/gameState.js';
import changeLanguage from '../utils/changeLanguage.js';

const languageBtn = function () {
	rusBtn.addEventListener('click', () => {
		gameState.currentLang = 'ru';
		changeLanguage(gameState.currentLang);
	});
	engBtn.addEventListener('click', () => {
		gameState.currentLang = 'en';
		changeLanguage(gameState.currentLang);
	});
};

export default languageBtn;
