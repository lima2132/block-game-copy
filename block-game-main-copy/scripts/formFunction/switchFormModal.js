import { switchFormBtn, formWrapper } from "../../dom.js";
import showFormLogin from "./formWindows/showFormLogin.js";
import showFormReg from "./formWindows/showFormReg.js";
const switchFormModal = function () {
  switchFormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (formWrapper.classList.contains("form-loggin")) {
      showFormReg();
    } else if (formWrapper.classList.contains("form-registration")) {
      showFormLogin();
    }
  });
};

export default switchFormModal;
