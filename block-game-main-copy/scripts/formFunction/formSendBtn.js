import { formInputName } from "../../dom.js";

import logInValidation from "./logInValidation.js";
import regValidation from "./regValitadion.js";
import showFormLogin from "./formWindows/showFormLogin.js";
import createAccount from "./createAccount.js";
const formSendBtn = function () {
  const formBtn = document.querySelector(".form-button");
  formBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.closest(".form-loggin")) {
      logInValidation();
    }
    if (e.target.closest(".form-registration")) {
      const isValidReg = regValidation();

      if (!isValidReg) return;
      createAccount();
      showFormLogin();
    }
  });
};
export default formSendBtn;
