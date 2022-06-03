import { makeOrderSummary } from "../makeOrderSummary.js";

export function removeFromCart() {
  const trash = document.querySelector("#trash");
  trash.addEventListener("click", handleClick);
}

function handleClick(event) {
  console.log("hello");
  const currentCartList = getCarList();
  const id = this.dataset.id;
  const newCartList = currentCartList.filter((item) => item.id !== id);
  saveItem(newCartList);
  makeOrderSummary();
}

function getCarList() {
  const cartList = localStorage.getItem("cartList");
  return JSON.parse(cartList);
}

function saveItem(items) {
  localStorage.setItem("cartList", JSON.stringify(items));
}
