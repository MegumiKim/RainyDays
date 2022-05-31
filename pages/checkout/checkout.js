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

// const question = document.querySelector("#question");
// const sscHint = document.querySelector("#ssc-hint");
// question.addEventListener("click", function () {
//   if (sscHint.style.display === "block") {
//     sscHint.style.display = "none";
//   } else {
//     sscHint.style.display = "block";
//   }
// });

const checkoutForm = document.querySelector("form");

checkoutForm.onsubmit = function (event) {
  event.preventDefault();
  window.location.href = "/pages/order-confirmation/confirmation.html";
  clearCartList();
  // if (validateLoginForm()) {
  //   window.location.href = "/pages/order-confirmation/confirmation.html";
  // } else {
  //   userAlert.innerHTML = displayMessage(
  //     "error",
  //     "please fill correct email and password"
  //   );
  // }
};

function clearCartList() {
  localStorage.setItem("cartList", "");
}
