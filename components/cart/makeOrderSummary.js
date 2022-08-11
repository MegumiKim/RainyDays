import { loadFromStorage } from "../../constants/storage/localStorage.js";
import { createProductSummary } from "../../pages/product-specific/renderProduct.js";

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
      // createHtml(item);
      renderProductSummary(item, cartList);
      total += item.price;
    });

    createTotalHtml(cartItems, total);
  } else {
    checkoutButton.style.display = "none";
    cartList.innerHTML = "No item added";
  }
}

function createTotalHtml(item, total) {
  totalContainer.innerHTML = `
  <div class="num-of-items">${item.length} item(s)</div>
  <div class="total">Total: NOK ${new Intl.NumberFormat().format(total)}</div>
  `;
}

function renderProductSummary(product, parent) {
  const productHtml = createProductSummary(product);
  parent.append(productHtml);
}

// function createHtml(item) {
//   cartList.innerHTML += `
//   <h3 class="product-name">${item.name}</h3>
//   <div class="qty"></div>
//   <div class="cart-item-wrap">
// <img class="product-image-cart" src="${item.src}"/>
//   <div class="order-details">
//   <p class="price">NOK ${item.price}</p>
//   <i class="fa-solid fa-trash" data-id="${item.id}" id="trash"></i>
//   </div>
//   </div>
// `;
// }
