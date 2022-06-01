import { validateCheckoutForm } from "../../components/validateForm.js";
import { displayMessage } from "../../components/displayMessage.js";
// import { makeOrderSummary } from "../../components/makeOrderSummary.js";
// const tel = document.querySelector("#tel");

// makeOrderSummary();

// tel.addEventListener("keyup", function (tel) {
//   const regEx = /^\d+$/;
//   const patternMach = regEx.test(tel.value);
//   if (patternMach) {
//     console.log("good number");
//     return true;
//   } else {
//     console.log("bad number");
//     return false;
//   }
// });

const question = document.querySelector("#question");
const sscHint = document.querySelector("#ccs-hint");
question.addEventListener("click", function () {
  if (sscHint.style.display === "block") {
    sscHint.style.display = "none";
  } else {
    sscHint.style.display = "block";
  }
});

const checkoutForm = document.querySelector("#checkoutForm");
const userAlert = document.querySelector(".user-alert");
checkoutForm.onsubmit = function (event) {
  event.preventDefault();
  if (!validateCheckoutForm()) {
    userAlert.innerHTML = displayMessage("error", "Please fill all the fields");
  } else {
    window.location.href = "/pages/order-confirmation/confirmation.html";
    checkoutForm.reset();
    clearCartList();
  }
};

function clearCartList() {
  localStorage.setItem("cartList", "");
}
