import { removeFromStorage } from "../../constants/storage/localStorage.js";
import { createCart } from "./createCart.js";
import { showNumberOfItemsInTheCart } from "./showNumberOfItems.js";
const numberOfItems = document.querySelector(".numberOfItemsInTheCart");
const cart = document.querySelector(".cart");

export function removeFromCart(event) {
  const id = parseInt(this.id);
  // const name = this.name;

  // cart.innerHTML = `<p>Discarded ${name}</p>`;
  removeFromStorage("cart-items", id);
  showNumberOfItemsInTheCart(numberOfItems);
  createCart(cart);
}
