import { productArray } from "./productsList.js";
import { makeOrderSummary } from "./utils/makeOrderSummary.js";
import { makeProductCatalogue } from "./utils/makeProductCatalogue.js";

const addButton = document.querySelector(".add-button");
const cart = document.querySelector(".cart");

let cartArray = [];

addButton.onclick = function (event) {
  cart.style.display = "flex";

  const itemToAdd = productArray.find(
    (item) => item.id === event.target.dataset.product
  );
  cartArray.push(itemToAdd);

  localStorage.setItem("cartList", JSON.stringify(cartArray));
  makeOrderSummary();
};

const heart = document.querySelector(".heart");

heart.onclick = function (event) {
  if (event.target.style.color === "salmon") {
    event.target.style.color = "grey";
  } else {
    event.target.style.color = "salmon";
  }
};

for (let i = 0; i < 3; i++) {
  const product = productArray[i];
  makeProductCatalogue(product);
}
