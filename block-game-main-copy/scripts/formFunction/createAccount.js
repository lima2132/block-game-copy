import {
  formInputName,
  formInputPassword,
  formInputCheckPassword,
} from "../../dom.js";
// import data from "../data/data.json";
const createAccount = async function () {
  let nameValue = formInputName.value;
  let passwordValue = formInputPassword.value;
  const res = await fetch("./scripts/data/data.json");
  const data = await res.json();

  const jsData = JSON.parse(data);
  console.log(jsData);

  //   console.log(data);
  //   console.log(nameValue);
  //   console.log(passwordValue);
};

export default createAccount;
