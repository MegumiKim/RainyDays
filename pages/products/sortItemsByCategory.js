import { getItems } from "./getItems.js";

export function sortItemsByCategory() {
  const proxy = "https://noroffcors.herokuapp.com/";
  const url = "http://megumikim.great-site.net/wp-json/wc/store/products/";
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const categoryID = params.get("category");
  const categoryUrl = proxy + url + `?category=${categoryID}`;

  if (categoryID) {
    return getItems(categoryUrl);
  } else {
    return getItems(url);
  }
}
