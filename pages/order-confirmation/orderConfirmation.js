// import { makeOrderSummary } from "../../components/cart/makeOrderSummary.js";
import { displayCart } from "../../components/cart/displayCart.js";
const seeMoreProductsButton = document.querySelector(".cta");
const orderSummary = document.querySelector(".checkout");
// makeOrderSummary();
displayCart(orderSummary);

seeMoreProductsButton.addEventListener("click", function () {
  localStorage.setItem("cart-items", []);
});
