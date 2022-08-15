import { loadFromStorage } from "../../constants/storage/localStorage.js";
import {
  createProductSummary,
  createCartItem,
} from "../../pages/product-specific/createHtmlObjects.js";
import { createTotalHtml } from "../../pages/product-specific/createElements.js";

const cartList = document.querySelector(".cart-list");
const cart = document.querySelector(".cart");

const checkoutButton = document.querySelector(".checkout-button");

export function makeOrderSummary() {
  const cartItems = loadFromStorage("cartList");
  const totalContainer = document.querySelector(".total");
  if (cartItems.length !== 0) {
    cartList.innerHTML = "";
    totalContainer.innerHTML = "";
    let total = 0;

    cartItems.forEach((item) => {
      renderProductSummary(item, cartList);
      total += item.price;
    });

    createTotalHtml(cartItems, total, totalContainer);
    // checkoutButton.style.display = flex;
  } else {
    checkoutButton.style.display = "none";
    cartList.innerHTML = "No item added";
  }
}

function renderProductSummary(product, parent) {
  const productHtml = createProductSummary(product);
  parent.append(productHtml);
}
