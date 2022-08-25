import { createCart } from "./createCart.js";

const myCart = document.querySelector(".cart");
const myBag = document.querySelector(".my-bag");

myBag.onclick = function () {
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
myBag.addEventListener("mouseleave", function () {
  setTimeout(hideCart, 5000);
});

export function hideCart() {
  myCart.style.display = "none";
}
