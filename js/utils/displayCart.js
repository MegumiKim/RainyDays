import { makeOrderSummary } from "./makeOrderSummary.js";

const myCart = document.querySelector(".cart");
const myBag = document.querySelector(".my-bag");

export function displayCart() {
  myBag.addEventListener("click", function () {
    myCart.style.display = "flex";
  });
  myBag.addEventListener("mouseleave", function () {
    setTimeout(function () {
      myCart.style.display = "none";
    }, 3000);
  });
  makeOrderSummary();
}
