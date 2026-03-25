import { translate } from '../data/translate.js';
// import { gameState } from '../state/gameState.js';

const changeLanguage = function (lang) {
	const elements = document.querySelectorAll('[data-i18n]');
	elements.forEach(el => {
		const key = el.dataset.i18n;
		el.textContent = translate[lang][key];
	});
};

export default changeLanguage;
