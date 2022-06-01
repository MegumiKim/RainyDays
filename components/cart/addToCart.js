// import { makeOrderSummary } from "../makeOrderSummary.js";
// import { productArray } from "../../constants/productsList.js";

// const cart = document.querySelector(".cart");
// let cartArray = [];
// let cartDict = {};

// export function addToCart(event) {
//   cart.style.display = "flex";

//   const itemToAdd = productArray.find(
//     (item) => item.id === event.target.dataset.product
//   );
//   cartArray.push(itemToAdd);
//   console.log(itemToAdd);

//   if (cartArray.find((item) => item.id === itemToAdd.id)) {
//     console.log("it's already in the list");
//   }

//   localStorage.setItem("cartList", JSON.stringify(cartArray));
//   makeOrderSummary();
// }
