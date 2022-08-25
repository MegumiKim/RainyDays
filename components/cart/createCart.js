import { createElement } from "../createHtmlElements/createElement.js";
import { loadFromStorage } from "../../constants/storage/localStorage.js";
import { createCartItem } from "../createHtmlElements/createHtmlObjects.js";
import { hideCart } from "./displayCart.js";
import { displayMessage } from "../displayMessage.js";

export function createCart(parent) {
  parent.innerHTML = "";
  const cartItems = loadFromStorage("cart-items");
  const cartItemsContainer = createElement("div", "cart-items", undefined, []);
  const total = createElement("div", "total", undefined, []);
  const checkOutButton = createElement("a", "cta", "checkout");

  const closeButton = createElement(
    "button",
    "close-button",
    '<i class="fa-solid fa-xmark"></i>'
  );
  closeButton.onclick = hideCart;
  checkOutButton.href = "/pages/checkout/checkout.html";
  checkOutButton.id = "checkoutButton";

  let totalSum = 0;
  let totalItems = 0;

  if (cartItems.length !== 0) {
    cartItems.forEach((item) => {
      const productHtml = createCartItem(item);
      cartItemsContainer.append(productHtml);

      totalSum += item.price * item.numberOfEachItem;
      totalItems += item.numberOfEachItem;
    });
    total.innerHTML += `  <div class="num-of-items">Total: ${totalItems} item(s)</div>
    <div class="sum">NOK ${new Intl.NumberFormat().format(totalSum)}</div>
    `;

    parent.append(cartItemsContainer);
    parent.append(total);
    parent.append(checkOutButton);
    parent.append(closeButton);
  } else {
    parent.innerHTML = displayMessage("neutral", "No item in the cart");
  }
}
