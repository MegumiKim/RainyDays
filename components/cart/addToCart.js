import { addToLocalStorage } from "../../constants/storage/localStorage.js";
import { makeOrderSummary } from "./makeOrderSummary.js";

const cart = document.querySelector(".cart");
const key = "cart-items";

export function addToCart(event) {
  cart.style.display = "flex";
  addToLocalStorage(event, key);
  makeOrderSummary();
}
