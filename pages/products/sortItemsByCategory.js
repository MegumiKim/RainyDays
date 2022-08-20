import { getItems } from "./getItems.js";

export function sortItemsByCategory() {
  const proxy = "https://noroffcors.herokuapp.com/";
  // const url = "http://megumikim.great-site.net/wp-json/wc/store/products/";
  const url = "http://localhost/rainydays/wp-json/wc/store/products/";
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const categoryID = params.get("category");
  const categoryUrl = url + `?category=${categoryID}`;

  // const xhr = new XMLHttpRequest();

  // xhr.open("GET", url);
  // xhr.onreadystatechange = function () {
  //   console.log(xhr);
  // };
  // xhr.send();

  if (categoryID) {
    return getItems(categoryUrl);
  } else {
    return getItems(url);
  }
}
