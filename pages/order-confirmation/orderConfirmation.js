import { loadFromStorage } from "../../constants/storage/localStorage.js";
import { createProductSummary } from "../product-specific/renderProduct.js";
import { createTotalHtml } from "../product-specific/createElements.js";
const container = document.querySelector(".order-summary-container");

function createOrderConfirmation() {
  const cartItems = loadFromStorage("cartList");

  if (cartItems.length !== 0) {
    container.innerHTML = "";
    let total = 0;

    cartItems.forEach((item) => {
      renderOrderSummary(item, container);
      total += item.price;
    });

    createTotalHtml(cartItems, total, container);
  }

  function renderOrderSummary(product, parent) {
    const productHtml = createProductSummary(product);
    parent.append(productHtml);
  }
}

createOrderConfirmation();
