import { makeProductCatalogue } from "../../components/makeProductCatalogue.js";

const productsContainer = document.querySelector(".products-container");

export async function getItems(url) {
  try {
    const response = await fetch(url);
    const products = await response.json();

    if (products.length === 0) {
      productsContainer.innerHTML = `<p>No Item Found</p>`;
    } else {
      products.forEach((product) => makeProductCatalogue(product));
    }
  } catch (e) {
    console.log(e);
  }
}
