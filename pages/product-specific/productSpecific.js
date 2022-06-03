import { productArray } from "../../constants/productsList.js";
import { makeOrderSummary } from "../../components/cart/makeOrderSummary.js";
import { makeProductCatalogue } from "../../components/makeProductCatalogue.js";
// import { displayCart } from "../../components/cart/displayCart.js";
// import { removeFromCart } from "../../components/cart/removeFromCart.js";

const cart = document.querySelector(".cart");
let cartArray = [];

const addButton = document.querySelector(".add-button");

addButton.onclick = function addToCart(event) {
  const itemToAdd = productArray.find(
    (item) => item.id === event.target.dataset.product
  );
  cartArray.push(itemToAdd);

  // if (cartArray.find((item) => item.id === itemToAdd.id)) {
  //   console.log("it's already in the list");
  // }

  localStorage.setItem("cartList", JSON.stringify(cartArray));
  // displayCart();
  makeOrderSummary();
  // removeFromCart();
  cart.style.display = "flex";
};

const heart = document.querySelector(".heart");

heart.onclick = function (event) {
  if (event.target.style.color === "salmon") {
    event.target.style.color = "grey";
  } else {
    event.target.style.color = "salmon";
  }
};

for (let i = 1; i < 3; i++) {
  const product = productArray[i];
  makeProductCatalogue(product);
}
