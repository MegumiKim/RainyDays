import { getItems } from "../pages/products/getItems.js";
// import { saveToStorage } from "../../constants/storage/local.js";

export function searchFunction() {
  const searchButton = document.querySelector("#search_icon");
  // const searchKey = "search";
  searchButton.onclick = function () {
    searchItems();
  };

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      // saveToStorage("search", event.target.value);
      searchItems();
    }
  });
}

export function searchItems() {
  const productsContainer = document.querySelector(".products-container");
  const url = "https://kimuramegumi.site/test/wp-json/wc/store/products/";

  let searchInput = document.querySelector("#search").value;
  searchInput = searchInput.toLowerCase().trim();
  const newUrl = url + `?search=${searchInput}`;

  productsContainer.innerHTML = "";
  getItems(newUrl, productsContainer);
}
