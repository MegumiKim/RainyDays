import { addToLocalStorage } from "../../constants/storage/localStorage.js";
import { makeOrderSummary } from "./makeOrderSummary.js";

const cart = document.querySelector(".cart");

export function addToCart(event) {
  cart.style.display = "flex";
  addToLocalStorage(event, "cartList");
  makeOrderSummary();
}
