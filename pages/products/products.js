import { getItems } from "./getItems.js";
import { searchItems } from "../../components/searchFunction.js";

const url = "http://localhost/Rainydays/wp-json/wc/store/products/";

const searchButton = document.querySelector("#search_icon");
searchButton.onclick = function () {
  searchItems();
};
document.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchItems();
  }
});

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const categoryID = params.get("category");
const title = document.querySelector("title");
const categoryUrl = url + `?category=${categoryID}`;

if (categoryID) {
  console.log(categoryUrl);
  getItems(categoryUrl);
} else {
  getItems(url);
}
