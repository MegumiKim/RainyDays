import { getItems } from "./getItems.js";
import { searchItems } from "../../components/searchFunction.js";
import { onSearch } from "../../components/listner/onSearch.js";
import { saveToStorage } from "../../constants/storage/local.js";

const url = "http://localhost/Rainydays/wp-json/wc/store/products/";
const parent = document.querySelector(".products-container");

const searchButton = document.querySelector("#search_icon");
const searchKey = "search";
searchButton.onclick = function () {
  searchItems();
};
document.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    saveToStorage(searchKey, event.target.value);
    searchItems();
  }
});

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const categoryID = params.get("category");
const title = document.querySelector("title");
const categoryUrl = url + `?category=${categoryID}`;

if (categoryID) {
  getItems(categoryUrl);
} else {
  getItems(url);
}

// const searchButton = document.querySelector("#search_icon");
// const searchBox = document.querySelector("#search");

// searchButton.addEventListener("click", function (event) {
//   event.preventDefault();
// });

// searchBox.addEventListener("change", function (event) {
//   const productList = getItems(url);
//   onSearch(event, parent, productList);
// });
