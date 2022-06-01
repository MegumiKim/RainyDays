import { removeFromCart } from "./cart/removeFromCart.js";
const cartList = document.querySelector(".cart-list");
const cart = document.querySelector(".cart");
const totalContainer = document.querySelector(".total");
const checkoutButton = document.querySelector(".checkout-button");

export function makeOrderSummary() {
  const cartItems = JSON.parse(localStorage.getItem("cartList"));
  if (cartItems[0]) {
    cartList.innerHTML = "";
    let total = 0;

    cartItems.forEach((item) => {
      total += item.price;

      cartList.innerHTML += `
        <h3 class="product-name">${item.name}</h3>
        <div class="qty"></div>
        <div class="cart-item-wrap">
        <div style="background-image: url(${item.image})" class='cart-image'></div>
        <div class="order-details">
        <p class="price">NOK ${item.price}</p>
        <p>Color: ${item.color[0]}</p>
        <p>Size: ${item.size[0]}</p>
        <i class="fa-solid fa-trash" data-id="${item.id}" id="trash"></i>
        </div>
        </div>
      `;
    });

    totalContainer.innerHTML = `
    <div class="total">Total: NOK ${total}</div>
  `;
    removeFromCart();
  } else {
    checkoutButton.style.display = "none";
    cart.innerHTML = "No item added";
  }
}
