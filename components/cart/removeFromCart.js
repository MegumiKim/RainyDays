import { removeFromStorage } from "../../constants/storage/localStorage.js";

// import { makeOrderSummary } from "../makeOrderSummary.js";
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
const checkoutButton = document.querySelector(".checkout-button");

export function removeFromCart(event) {
  const id = parseInt(event.target.dataset.id);

  removeFromStorage("cartList", id);

  cartList.innerHTML = `<p>Discarded</p>`;
  totalContainer.innerHTML = "";
  checkoutButton.style.display = "none";
  // makeOrderSummary();
}
