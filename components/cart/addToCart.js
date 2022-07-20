import { productArray } from "../../constants/productsList.js";
import {
  loadFromStorage,
  saveToStorage,
} from "../../constants/storage/local.js";
import { makeOrderSummary } from "./makeOrderSummary.js";

export function addToCart(event) {
  try {
    const cartItems = JSON.parse(localStorage.getItem("cartList")) || [];
    const cartArrays = [...cartItems];

    const itemToAdd = productArray.find(
      (item) => item.id === event.target.data
    );
    cartArrays.push(event.target.data);
    console.log(cartArrays);
    localStorage.setItem("cartList", JSON.stringify(cartArrays));
    makeOrderSummary();
    // cart.style.display = "flex";
  } catch (e) {
    console.log(e);
  }
}

// export function cart(product) {
//   try {
//     saveToStorage("cartItems", product.name);

//     const cartItems = loadFromStorage("cartItems");
//     console.log(cartItems);
//   } catch (e) {
//     console.log(e);
//   }
// }
