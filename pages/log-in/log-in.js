import { validateLoginForm } from "../../components/validateForm.js";
import { displayMessage } from "../../components/displayMessage.js";
import { displayCart } from "../../components/cart/displayCart.js";

const myBag = document.querySelector(".my-bag");

myBag.onclick = function () {
  displayCart();
};

const loginForm = document.querySelector("#log-in-form");
const email = document.querySelector("#email");
// const emailError = document.querySelector(".email-error");
const password = document.querySelector("#password");
const passwordError = document.querySelector(".password-error");
const userAlert = document.querySelector(".user-alert");
const loginButton = document.querySelector("#login-button");

loginForm.onsubmit = function (event) {
  event.preventDefault();
  if (validateLoginForm()) {
    window.location.href = "/pages/my-page/my-page.html";
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
    passwordError.style.display = "none";
    loginButton.disabled = true;
    loginButton.style.backgroundColor = "var(--color_subtle)";
    console.log("disabled");
  }
}
