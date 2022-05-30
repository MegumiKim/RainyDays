const userName = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const message = document.querySelector("#message");
const nameError = document.querySelector(".name-error");
const subjectError = document.querySelector(".subject-error");
const addressError = document.querySelector(".address-error");
const emailError = document.querySelector(".email-error");
const messageError = document.querySelector(".message-error");
const passwd = document.querySelector("#password");
// const errorMessage = document.querySelectorAll(".form-error");

// function validateForm(requiredField) {
//   if (requiredField) {
//     return true;
//   }
// }

export function validateContactForm() {
  if (
    checkInputLength(userName, 2, nameError) &&
    checkInputLength(subject, 5, subjectError) &&
    validateEmail(email) &&
    checkInputLength(message, 5, messageError)
  ) {
    return true;
  }
}

export function validateLoginForm() {
  if (validateEmail(email) && validatePassword(password)) {
    return true;
  } else {
    return false;
  }
}

function checkInputLength(inputField, len, errorField) {
  // console.log(inputField.value);
  if (inputField.value.trim().length >= len) {
    errorField.innerHTML = "";
    return true;
  } else {
    errorField.innerHTML = `Please input minimum ${len} characters`;
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMach = regEx.test(email.value);
  if (patternMach) {
    emailError.innerHTML = "";
    return true;
  } else {
    emailError.innerHTML = "Please input valid email";
    return false;
  }
}

function validatePassword(password) {
  const regEx = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
  const patternMach = regEx.test(password.value);
  if (patternMach) {
    console.log("good password");
    return true;
  } else {
    console.log("bad passwd");
    return false;
  }
}

function validatePhone(phone) {
  const regEx = /^\d+$/;
  const patternMach = regEx.test(phone.value);
  if (patternMach) {
    console.log("good number");
    return true;
  } else {
    console.log("bad number");
    return false;
  }
}
