import { getItems } from "./getItems.js";
import { searchItems } from "../../components/searchFunction.js";

const url = "http://localhost/Rainydays/wp-json/wc/store/products/";

const searchButton = document.querySelector("#search_icon");
searchButton.onclick = function () {
  searchItems();
};

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const category = params.get("category");
const title = document.querySelector("title");
const categoryUrl = url + `?product-category=${category}`;

if (category) {
  console.log(categoryUrl);
  getItems(categoryUrl);
} else {
  getItems(url);
}
