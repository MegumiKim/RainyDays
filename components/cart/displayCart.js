import { createCart } from "./createCart.js";

const myCart = document.querySelector(".cart");
const cartIcon = document.querySelector(".my-bag");

cartIcon.onclick = function () {
  displayCart(myCart);
};

export function displayCart(parent) {
  if (parent.style.display === "flex") {
    hideCart(parent);
  } else {
    parent.style.display = "flex";
    createCart(parent);
  }
}
cartIcon.addEventListener("mouseleave", function () {
  setTimeout(hideCart, 5000);
});

export function hideCart() {
  myCart.style.display = "none";
}
