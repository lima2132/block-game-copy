import {
  formInputName,
  formInputPassword,
  formInputCheckPassword,
} from "../../dom.js";

const showError = (domInputEl, message) => {
  if (domInputEl.nextElementSibling !== null) return;

  domInputEl.classList.add("input-error");
  const errorMessage = document.createElement("p");
  errorMessage.classList.add("input-error__message");
  domInputEl.closest(".form-field").appendChild(errorMessage);
  errorMessage.textContent = message;
};

const removeError = (domInputEl) => {
  domInputEl.nextElementSibling?.remove();
  domInputEl.classList.remove("input-error");
};

const regValidation = function () {
  const messageErrors = {
    lowNameLength: "Имя должно состоять минимум из 4 символов",
    lowPasswordLength: "Пароль должен быть от 6 символов",
    incorrectReEnterPassword: "Пароли должены совпадать",
  };

  let nameValue = formInputName.value;
  let passwordValue = formInputPassword.value;
  let checkPasswordValue = formInputCheckPassword.value;

  let isNameTrue = nameValue.length >= 4;
  let isPasswordTrue = passwordValue.length >= 6;
  let isCheckPasswordTrue = checkPasswordValue === passwordValue;

  if (!isNameTrue) {
    showError(formInputName, messageErrors.lowNameLength);
  } else {
    removeError(formInputName);
  }

  if (!isPasswordTrue) {
    showError(formInputPassword, messageErrors.lowPasswordLength);
  } else {
    removeError(formInputPassword);
  }

  if (!isCheckPasswordTrue) {
    showError(formInputCheckPassword, messageErrors.incorrectReEnterPassword);
  } else {
    removeError(formInputCheckPassword);
  }

  if (!isNameTrue || !isPasswordTrue || !isCheckPasswordTrue) return;

  return true;
};
export default regValidation;
