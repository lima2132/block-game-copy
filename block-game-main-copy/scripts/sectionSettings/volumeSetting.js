const volumeSetting = function (e, volumeSound, range, volumeSpan, sound) {
  e.preventDefault();

  const rect = volumeSound.getBoundingClientRect();
  const width = rect.width;
  const elemOffsetX = e.offsetX;
  const precent = (elemOffsetX / width) * 100;
  range.value = precent;
  volumeSpan.style.width = `${precent}%`;
  sound.volume = precent * 0.01;
};

export default volumeSetting;
