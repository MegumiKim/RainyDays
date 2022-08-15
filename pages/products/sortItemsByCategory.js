import { getItems } from "./getItems.js";

export function sortItemsByCategory() {
  const url = "http://localhost/Rainydays/wp-json/wc/store/products/";
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const categoryID = params.get("category");
  const title = document.querySelector("title");
  const categoryUrl = url + `?category=${categoryID}`;

  if (categoryID) {
    return getItems(categoryUrl);
  } else {
    return getItems(url);
  }
}
