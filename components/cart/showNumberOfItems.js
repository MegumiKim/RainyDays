import { loadFromStorage } from "../../constants/storage/localStorage.js";

const numberOfItems = document.querySelector(".numberOfItemsInTheCart");
export function showNumberOfItemsInTheCart(parent) {
  const cartItems = loadFromStorage("cart-items");
  let totalItems = 0;

  if (cartItems.length !== 0) {
    cartItems.forEach((item) => {
      totalItems += item.numberOfEachItem;
    });
    parent.innerHTML = totalItems;
  } else {
    parent.style.display = "none";
  }
}

showNumberOfItemsInTheCart(numberOfItems);
