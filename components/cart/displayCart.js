import { makeOrderSummary } from "../makeOrderSummary.js";
import { removeFromCart } from "./removeFromCart.js";

const myCart = document.querySelector(".cart");
const myBag = document.querySelector(".my-bag");

export function displayCart() {
  myBag.addEventListener("click", function () {
    if (myCart.style.display === "flex") {
      myCart.style.display = "none";
    } else {
      myCart.style.display = "flex";
    }
  });
  myBag.addEventListener("mouseleave", function () {
    setTimeout(function () {
      myCart.style.display = "none";
    }, 3000);
  });
  makeOrderSummary();
}
