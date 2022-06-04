import { makeOrderSummary } from "./makeOrderSummary.js";

const myCart = document.querySelector(".cart");
const myBag = document.querySelector(".my-bag");

myBag.onclick = function () {
  displayCart();
};

export function displayCart() {
  if (myCart.style.display === "flex") {
    myCart.style.display = "none";
  } else {
    myCart.style.display = "flex";
    makeOrderSummary();
  }
}
myBag.addEventListener("mouseleave", function () {
  setTimeout(function () {
    myCart.style.display = "none";
  }, 4000);
});
