import { getItems } from "./getItems.js";

export function sortItemsByCategory() {
  const proxy = "https://noroffcors.herokuapp.com/";
  const url = "https://kimuramegumi.site/test/wp-json/wc/store/products/";

  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const categoryID = params.get("category");
  const categoryUrl = url + `?category=${categoryID}`;
  const productsContainer = document.querySelector(".products-container");

  if (categoryID) {
    return getItems(categoryUrl, productsContainer);
  } else {
    return getItems(url, productsContainer);
  }
}
