import { removeFromStorage } from "../../constants/storage/localStorage.js";
import { createCart } from "./createCart.js";

const cart = document.querySelector(".cart");

export function removeFromCart(event) {
  const id = parseInt(this.id);
  // const name = this.name;

  // cart.innerHTML = `<p>Discarded ${name}</p>`;
  removeFromStorage("cart-items", id);
  createCart(cart);
}
