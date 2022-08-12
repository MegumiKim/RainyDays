import { loadFromStorage } from "../../constants/storage/localStorage.js";
import { createProductSummary } from "../../pages/product-specific/renderProduct.js";
import { createTotalHtml } from "../../pages/product-specific/createElements.js";

const cartList = document.querySelector(".cart-list");
const cart = document.querySelector(".cart");
const totalContainer = document.querySelector(".total");
const checkoutButton = document.querySelector(".checkout-button");

export function makeOrderSummary() {
  const cartItems = loadFromStorage("cartList");

  if (cartItems.length !== 0) {
    cartList.innerHTML = "";
    let total = 0;

    cartItems.forEach((item) => {
      renderProductSummary(item, cartList);
      total += item.price;
    });

    createTotalHtml(cartItems, total, cartList);
    // checkoutButton.style.display = flex;
  } else {
    checkoutButton.style.display = "none";
    cartList.innerHTML = "No item added";
  }
}

// function createTotalHtml(item, total) {
//   totalContainer.innerHTML = `
//   <div class="num-of-items">${item.length} item(s)</div>
//   <div class="total">Total: NOK ${new Intl.NumberFormat().format(total)}</div>
//   `;
// }

function renderProductSummary(product, parent) {
  const productHtml = createProductSummary(product);
  parent.append(productHtml);
}
