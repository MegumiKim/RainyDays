const userName = document.querySelector("#name");
const subject = document.querySelector("#subject");
const address = document.querySelector("#address");
const message = document.querySelector("#message");
const nameError = document.querySelector(".name-error");
const subjectError = document.querySelector(".subject-error");
const addressError = document.querySelector(".address-error");
const emailError = document.querySelector(".email-error");
const messageError = document.querySelector(".message-error");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordError = document.querySelector(".password-error");

// CheckoutForm
const cardNum = document.querySelector("#card-number");
const cardError = document.querySelector(".card-error");
const zip = document.querySelector("#zip");
const zipError = document.querySelector(".zip-error");
const tel = document.querySelector("#tel");
const telError = document.querySelector(".tel-error");
const cardName = document.querySelector("#card-name");
const cardNameError = document.querySelector(".card-name-error");
const expiry = document.querySelector("#expiry");
const expiryError = document.querySelector(".expiry-error");
const csc = document.querySelector("#csc");
const cscError = document.querySelector(".csc-error");

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
  if (validateEmail(email) && checkInputLength(password, 4, passwordError)) {
    return true;
  } else {
    return false;
  }
}

export function validateCheckoutForm() {
  if (
    checkInputLength(userName, 2, nameError) &&
    checkInputLength(address, 4, addressError) &&
    validateNum(zip, zipError) &&
    checkInputLength(zip, 4, zipError) &&
    validateNum(tel, telError) &&
    checkInputLength(tel, 4, telError) &&
    validateEmail(email) &&
    checkInputLength(cardName, 2, cardNameError) &&
    validateNum(cardNum, cardError) &&
    checkInputLength(cardNum, 4, cardError) &&
    validateNum(expiry, expiryError) &&
    checkInputLength(expiry, 4, expiryError) &&
    checkInputLength(csc, 3, cscError) &&
    validateNum(csc, cscError)
  ) {
    return true;
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

function validateNum(num, errorField) {
  const regEx = /^\d+$/;
  const patternMach = regEx.test(num.value);
  if (patternMach) {
    errorField.innerHTML = "";
    return true;
  } else {
    errorField.innerHTML = "Please input numbers";
    return false;
  }
}
// function validatePassword(password) {
//   const regEx = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
//   const patternMach = regEx.test(password.value);
//   if (patternMach) {
//     console.log("good password");
//     return true;
//   } else {
//     console.log("bad passwd");
//     return false;
//   }
// }

// function validatePhone(phone) {
//   const regEx = /^\d+$/;
//   const patternMach = regEx.test(phone.value);
//   if (patternMach) {
//     console.log("good number");
//     return true;
//   } else {
//     console.log("bad number");
//     return false;
//   }
// }
