import { productArray } from "../../constants/productsList.js";
import { makeOrderSummary } from "../../components/cart/makeOrderSummary.js";
import { makeProductCatalogue } from "../../components/makeProductCatalogue.js";
import { createProductHtml } from "./displayProductSpecific.js";
// import { displayCart } from "../../components/cart/displayCart.js";
// import { removeFromCart } from "../../components/cart/removeFromCart.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const title = document.querySelector("title");
const url = `http://localhost/Rainydays/wp-json/wc/store/products/${id}`;

async function fetchProduct() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createProductHtml(details);
  } catch (error) {
    console.log(error);
  }
}
fetchProduct();

const cart = document.querySelector(".cart");

// let cartArrays = JSON.parse(localStorage.getItem("cartList"));

const addButton = document.querySelector(".add-button");

addButton.onclick = function addToCart(event) {
  const cartItems = JSON.parse(localStorage.getItem("cartList")) || [];
  const cartArrays = [...cartItems];

  const itemToAdd = productArray.find(
    (item) => item.id === event.target.dataset.product
  );
  cartArrays.push(itemToAdd);

  // if (cartArray.find((item) => item.id === itemToAdd.id)) {
  //   console.log("it's already in the list");
  // }

  localStorage.setItem("cartList", JSON.stringify(cartArrays));
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
