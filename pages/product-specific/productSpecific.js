import { displayCart } from "../../components/cart/displayCart.js";
import { displayMessage } from "../../components/displayMessage.js";
import { createProductSpecificHtmlObject } from "../../components/createHtmlElements/createHtmlObjects.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `https://kimuramegumi.site/test/wp-json/wc/store/products/${id}`;

const parent = document.querySelector(".specif-product-container");
// const parent = document.querySelector(".specific-product-container");

async function fetchProduct() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    renderSpecificProduct(details, parent);
  } catch (error) {
    parent.innerHTML = displayMessage(
      "error",
      "Ooops! Something went wrong while getting data for you"
    );
    console.log(error);
  }
}
fetchProduct();

function renderSpecificProduct(product, parent) {
  const productHtml = createProductSpecificHtmlObject(product);
  const title = document.querySelector("title");
  const breadCrumb = document.querySelector(".current");

  title.innerHTML = "RAINYDAYS | " + product.name;
  breadCrumb.innerHTML = product.name.toUpperCase();
  breadCrumb.id = "current";
  parent.append(productHtml);
}
