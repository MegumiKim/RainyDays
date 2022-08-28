import { validateCheckoutForm } from "../../components/validateForm.js";
import { displayMessage } from "../../components/displayMessage.js";
import { displayCart } from "../../components/cart/displayCart.js";
import { createCart } from "../../components/cart/createCart.js";

const question = document.querySelector("#question");
const sscHint = document.querySelector("#csc-hint");
const orderSummary = document.querySelector(".order_summary");

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

// displayCart(orderSummary);
createCart(orderSummary);
