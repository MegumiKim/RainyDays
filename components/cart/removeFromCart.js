import { removeFromStorage } from "../../constants/storage/localStorage.js";

const cart = document.querySelector(".cart");

export function removeFromCart(event) {
  const id = parseInt(this.id);
  const name = this.name;

  console.log(this);
  cart.innerHTML = `<p>Discarded ${name}</p>`;
  removeFromStorage("cart-items", id);
}
