import { getItems } from "../pages/products/getItems.js";

const productsContainer = document.querySelector(".products-container");
const url = "http://localhost/Rainydays/wp-json/wc/store/products/";

export function searchItems() {
  const searchInput = document.querySelector("#search").value;
  const newUrl = url + `?search=${searchInput}`;

  productsContainer.innerHTML = "";
  getItems(newUrl);
}
