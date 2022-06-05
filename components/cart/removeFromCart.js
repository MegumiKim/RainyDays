// import { makeOrderSummary } from "../makeOrderSummary.js";
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
const checkoutButton = document.querySelector(".checkout-button");

export function removeFromCart() {
  const trash = document.querySelector("#trash");
  if (trash) {
    trash.addEventListener("click", handleClick);
  }
}

function handleClick(event) {
  const currentCartList = getCarList();
  const id = this.dataset.id;
  const newCartList = currentCartList.filter((item) => item.id !== id);
  saveItem(newCartList);

  location.reload();

  cartList.innerHTML = `<p>Discarded</p>`;
  totalContainer.innerHTML = "";
  checkoutButton.style.display = "none";
  // makeOrderSummary();
}

function getCarList() {
  const cartList = localStorage.getItem("cartList");
  return JSON.parse(cartList);
}

function saveItem(items) {
  localStorage.setItem("cartList", JSON.stringify(items));
}
