import {
  formWrapper,
  switchFormBtn,
  formTitle,
  formBtn,
  formFieldCheckPassword,
} from "../../../dom.js";

const showFormReg = function () {
  formWrapper.classList.remove("form-loggin");
  formWrapper.classList.add("form-registration");
  switchFormBtn.textContent = "войти";
  formTitle.textContent = "зарегистрируйте аккаунт";
  formBtn.textContent = "зарегистрировать";
  formFieldCheckPassword.classList.toggle("hide");
};

export default showFormReg;
