import { renderSpecificProduct } from "./renderProduct.js";
import { displayMessage } from "../../components/displayMessage.js";
import { makeOrderSummary } from "../../components/cart/makeOrderSummary.js";
// import { productArray } from "../../constants/productsList.js";
// import { makeProductCatalogue } from "../../components/makeProductCatalogue.js";
// import {
//   saveToStorage,
//   loadFromStorage,
// } from "../../constants/storage/local.js";

// import { displayCart } from "../../components/cart/displayCart.js";
// import { removeFromCart } from "../../components/cart/removeFromCart.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `http://localhost/Rainydays/wp-json/wc/store/products/${id}`;
const parent = document.querySelector(".products-container");
async function fetchProduct() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    renderSpecificProduct(details, parent);
  } catch (error) {
    parent.innerHTML = displayMessage(
      "error",
      "Ooops! Something went wrong while getting data for you"
    );
    console.log(error);
  }
}
fetchProduct();

// const cart = document.querySelector(".cart");
// for (let i = 1; i < 3; i++) {
//   const product = productArray[i];
//   createProductSpecificHtmlObject(product);
// }

// const favorite = "favorite";

// saveToStorage(favorite, productArray);

// console.log(loadFromStorage(favorite));
