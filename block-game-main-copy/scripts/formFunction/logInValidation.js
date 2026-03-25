import {
	menuContainer,
	overflow,
	formInputName,
	formInputPassword,
	formContainer,
} from '../../dom.js';
import startMusicSettings from '../sectionSettings/startMusicSettings.js';

const logInValidation = function () {
	if (formInputName.value.length < 4 || formInputPassword.value.length < 6)
		return;

	menuContainer.classList.toggle('hide');
	overflow.classList.toggle('hide');
	formContainer.classList.toggle('hide');
	startMusicSettings();
};

export default logInValidation;
