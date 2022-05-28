import { validateLoginForm, validateLoginForm } from "./utils/validateForm.js";
import { displayMessage } from "./utils/displayMessage.js";

const loginForm = document.querySelector("#log-in-form");
const userAlert = document.querySelector(".user-alert");
const loginButton = document.querySelector("#login-button");

loginForm.onsubmit = function (event) {
  event.preventDefault();
  if (validateLoginForm()) {
    loginButton.style.backgroundColor = "red";
  } else {
    userAlert.innerHTML = displayMessage(
      "error",
      "please fill correct email and password"
    );
  }
};
