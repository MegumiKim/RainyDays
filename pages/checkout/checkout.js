import { validateCheckoutForm } from "../../components/validateForm.js";
import { displayMessage } from "../../components/displayMessage.js";
import { makeOrderSummary } from "../../components/cart/makeOrderSummary.js";

const question = document.querySelector("#question");
const sscHint = document.querySelector("#csc-hint");
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
  }
};

makeOrderSummary();
