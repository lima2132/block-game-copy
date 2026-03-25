import { rangeSound, volumeSound, volumeSoundSpan } from '../../dom.js';
import { audioData } from '../data/audioData.js';
import volumeSetting from './volumeSetting.js';
// import createAudioObj from "../utils/createAudioObj.js";
const audio = new Audio();

const playSound = function () {
	const randomIndex = arr => Math.floor(Math.random() * arr.length);

	volumeSound.addEventListener('click', e => {
		volumeSetting(e, volumeSound, rangeSound, volumeSoundSpan, audio);
	});

	const start = () => {
		audio.src = audioData.playGame;
		audio.play();
	};
	const win = () => {
		audio.src = audioData.win[randomIndex(audioData.win)];
		audio.play();
	};
	const loze = () => {
		audio.src = audioData.loze[randomIndex(audioData.loze)];
		audio.play();
	};
	const trueBlock = () => {
		audio.src = audioData.trueBlock[randomIndex(audioData.trueBlock)];
		audio.play();
	};
	return { start, win, loze, trueBlock };
};

export default playSound;
