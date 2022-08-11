import { loadFromStorage } from "../../constants/storage/localStorage.js";
import { createProductSummary } from "../product-specific/renderProduct.js";

const favorites = loadFromStorage("favorites");
const container = document.querySelector(".container");

favorites.forEach((favorite) => {
  renderProductSummary(favorite, container);
});

function renderProductSummary(product, parent) {
  const productHtml = createProductSummary(product);
  parent.append(productHtml);
}
// import { addToCart } from "../../components/cart/addToCart.js";

// const addButton = document.querySelector(".add-button");
// const cart = document.querySelector(".cart");
// let cartArray = [];

// addButton.onclick = function addToCart(event) {
//   const itemToAdd = productArray.find(
//     (item) => item.id === event.target.dataset.product
//   );
//   const itemToAddID = itemToAdd.id;

//   cartArray.push(itemToAdd);

//   if (cartArray.find((item) => item.id === itemToAdd.id)) {
//     console.log("it's already in the list");
//   }

//   localStorage.setItem("cartList", JSON.stringify(cartArray));
//   makeOrderSummary();
//   cart.style.display = "flex";
// };

// const trash = document.querySelector("#removeFav");
// const favSection = document.querySelector(".favorites");
// trash.addEventListener("click", function (event) {
//   favSection.style.display = "none";
//   console.log(event);
// });
