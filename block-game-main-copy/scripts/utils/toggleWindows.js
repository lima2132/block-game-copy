const toggleWindows = function (btn, container1, container2) {
	btn.addEventListener('click', () => {
		container1.classList.toggle('hide');
		container2.classList.toggle('hide');
	});
};

export default toggleWindows;
