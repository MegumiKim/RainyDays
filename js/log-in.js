import { validateLoginForm } from "./utils/validateForm.js";
import { displayMessage } from "./utils/displayMessage.js";

const loginForm = document.querySelector("#log-in-form");
const email = document.querySelector("#email");
// const emailError = document.querySelector(".email-error");
const password = document.querySelector("#password");
const userAlert = document.querySelector(".user-alert");
const loginButton = document.querySelector("#login-button");

// loginButton.disabled = true;
// console.log(loginButton.disabled);

loginForm.onsubmit = function (event) {
  event.preventDefault();
  if (validateLoginForm()) {
    window.location.href = "my-page.html";
  } else {
    userAlert.innerHTML = displayMessage(
      "error",
      "please fill correct email and password"
    );
  }
};

email.addEventListener("keyup", isButtonDisabled);
password.addEventListener("keyup", isButtonDisabled);

function isButtonDisabled() {
  if (validateLoginForm()) {
    loginButton.disabled = false;
    loginButton.style.backgroundColor = "var(--color_yellow)";
    console.log("false");
  } else {
    loginButton.disabled = true;
    loginButton.style.backgroundColor = "var(--color_subtle)";
    console.log("disabled");
  }
}
