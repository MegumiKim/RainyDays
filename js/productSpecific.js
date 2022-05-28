import { productArray } from "./productsList.js";
import { makeOrderSummary } from "./utils/makeOrderSummary.js";

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
