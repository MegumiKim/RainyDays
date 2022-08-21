import { removeFromStorage } from "../../constants/storage/localStorage.js";

const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
const checkoutButton = document.querySelector(".checkout-button");

export function removeFromCart(event) {
  const id = parseInt(this.id);
  removeFromStorage("cart-items", id);

  cartList.innerHTML = `<p>Discarded</p>`;
  totalContainer.innerHTML = "";
  checkoutButton.style.display = "none";
}
