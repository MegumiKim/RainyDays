import { addToLocalStorage } from "../../constants/storage/localStorage.js";
import { displayMessage, disappearMessage } from "../displayMessage.js";
import { displayCart } from "./displayCart.js";

const cart = document.querySelector(".cart");
const key = "cart-items";
const userMessage = document.querySelector(".user-message");

export function addToCart(event) {
  addToLocalStorage(event, key);
  displayCart(cart);

  userMessage.innerHTML = displayMessage("success", "Item added to My Cart");
  setTimeout(disappearMessage, 3000);
}
