import { getItems } from "../pages/products/getItems.js";

export function searchFunction() {
  const searchButton = document.querySelector("#search_icon");
  const search = document.querySelector("#search");
  searchButton.onclick = function () {
    search.style.display = "block";
    searchItems();
  };

  search.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      searchItems();
    }
  });
}

export function searchItems() {
  const productsContainer = document.querySelector(".search_results");
  const url = "https://kimuramegumi.site/test/wp-json/wc/store/products/";

  let searchInput = document.querySelector("#search").value;
  searchInput = searchInput.toLowerCase().trim();
  const newUrl = url + `?search=${searchInput}`;

  productsContainer.innerHTML = "";
  getItems(newUrl, productsContainer);
}
