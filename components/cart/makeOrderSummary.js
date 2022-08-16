import { loadFromStorage } from "../../constants/storage/localStorage.js";
import {
  createProductSummary,
  createCartItem,
} from "../createHtmlElements/createHtmlObjects.js";
import {
  createTotalHtml,
  createTrash,
} from "../createHtmlElements/makeHtmlComponents.js";

const cartList = document.querySelector(".cart-list");
const cart = document.querySelector(".cart");
const checkoutButton = document.querySelector(".checkout-button");

export function makeOrderSummary() {
  const key = "cart-items";
  const cartItems = loadFromStorage(key);
  const totalContainer = document.querySelector(".total");
  console.log(cartItems);
  if (cartItems.length !== 0) {
    cartList.innerHTML = "";
    totalContainer.innerHTML = "";
    let totalSum = 0;
    let totalItems = 0;

    cartItems.forEach((item) => {
      renderProductSummary(item, cartList);
      // const trash = createTrash(item);
      // cartList.innerHTML += trash;
      totalSum += item.price * item.numberOfEachItem;
      totalItems += item.numberOfEachItem;
    });

    createTotalHtml(totalSum, totalItems, totalContainer);
    // checkoutButton.style.display = flex;
  } else {
    if (checkoutButton) {
      checkoutButton.style.display = "none";
      cartList.innerHTML = "No item added";
    }
  }
}

function renderProductSummary(product) {
  const productHtml = createCartItem(product);
  cartList.append(productHtml);
}
