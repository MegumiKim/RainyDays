import { productArray } from "../../constants/productsList.js";
import { makeOrderSummary } from "../../components/makeOrderSummary.js";
import { makeProductCatalogue } from "../../components/makeProductCatalogue.js";
// import { addToCart } from "../../components/cart/addToCart.js";

const cart = document.querySelector(".cart");
let cartArray = [];
// let addItem = {};

const addButton = document.querySelector(".add-button");

addButton.onclick = function addToCart(event) {
  const itemToAdd = productArray.find(
    (item) => item.id === event.target.dataset.product
  );
  cartArray.push(itemToAdd);
  console.log(itemToAdd);

  if (cartArray.find((item) => item.id === itemToAdd.id)) {
    console.log("it's already in the list");
  }

  localStorage.setItem("cartList", JSON.stringify(cartArray));
  makeOrderSummary();
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

for (let i = 0; i < 2; i++) {
  const product = productArray[i];
  makeProductCatalogue(product);
}

// addButton.onclick = function (event) {
//   const itemToAdd = productArray.find(
//     (item) => item.id === event.target.dataset.product
//   );
//   const productID = itemToAdd.id;

//   let quantity = 1;
//   let addItem = { productID, quantity };

//   cartArray.push(addItem);

//   if (cartArray.find((item) => item.productID === productID)) {
//     console.log("it's already in the list");
//   }

// };
