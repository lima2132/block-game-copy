import {
  overflow,
  menuContainer,
  modalContainer,
  gameContainer,
  modalMenuBtn,
} from "../../dom.js";

const clickModalMenu = function () {
  const DOMArray = [overflow, menuContainer, modalContainer, gameContainer];

  modalMenuBtn.addEventListener("click", () => {
    DOMArray.forEach((el) => el.classList.toggle("hide"));
  });
};

export default clickModalMenu;
