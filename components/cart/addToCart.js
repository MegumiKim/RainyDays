import { addToLocalStorage } from "../../constants/storage/localStorage.js";
import { disappearMessage } from "../displayMessage.js";
import { createCart } from "./createCart.js";
import { showNumberOfItemsInTheCart } from "./showNumberOfItems.js";

const cart = document.querySelector(".cart");
const key = "cart-items";
// const userMessage = document.querySelector(".user-message");
const numberOfItems = document.querySelector(".numberOfItemsInTheCart");

export function addToCart(event) {
  addToLocalStorage(event, key);
  createCart(cart);
  showNumberOfItemsInTheCart(numberOfItems);
  cart.style.display = "flex";
  // userMessage.innerHTML = displayMessage("success", "Item added to My Cart");
  setTimeout(disappearMessage, 4000);
}
