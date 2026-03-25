import { modalContainer, modalRestartBtn, overflow } from "../../dom.js";

const clickModalRestart = function (game) {
  modalRestartBtn.addEventListener("click", () => {
    overflow.classList.toggle("hide");
    modalContainer.classList.toggle("hide");
    game();
  });
};

export default clickModalRestart;
