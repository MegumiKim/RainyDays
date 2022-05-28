// import { createOrderSummary } from "./cart.js";
const cartList = document.querySelector(".cart-list");
const cart = document.querySelector(".cart");
const totalContainer = document.querySelector(".total");
const checkoutButton = document.querySelector(".checkout-button");

export function makeOrderSummary() {
  const cartItems = JSON.parse(localStorage.getItem("cartList"));
  if (!cartItems) {
    cart.innerHTML = "No item added";
    checkoutButton.style.display = "none";
  } else {
    cartList.innerHTML = "";
    let total = 0;

    cartItems.forEach((item) => {
      total += item.price;

      cartList.innerHTML += `
    <h3 class="product-name">${item.name}</h3>
        <div class="cart-item-wrap">
        <div style="background-image: url(${item.image})" class='cart-image'></div>
        <div class="order-details">
        <p class="price">NOK ${item.price}</p>
        <p>Color: ${item.color[1]}</p>
        <p>Size: ${item.size[1]}</p>
        </div>
        </div>
      `;
    });

    totalContainer.innerHTML = `
<div class="total">Total: NOK ${total}</div>
  `;
  }
}
