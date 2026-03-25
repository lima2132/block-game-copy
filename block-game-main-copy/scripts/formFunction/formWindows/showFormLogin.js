import {
  formWrapper,
  switchFormBtn,
  formTitle,
  formBtn,
  formFieldCheckPassword,
} from "../../../dom.js";

const showFormLogin = function () {
  formWrapper.classList.remove("form-registration");
  formWrapper.classList.add("form-loggin");
  switchFormBtn.textContent = "регистрация";
  formTitle.textContent = "войдите в аккаунт";
  formBtn.textContent = "войти";
  formFieldCheckPassword.classList.toggle("hide");
};

export default showFormLogin;
