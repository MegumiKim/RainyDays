import { makeOrderSummary } from "../../components/cart/makeOrderSummary.js";

const seeMoreProductsButton = document.querySelector(".cta");

makeOrderSummary();

seeMoreProductsButton.addEventListener("click", function () {
  localStorage.setItem("cart-items", []);
});
