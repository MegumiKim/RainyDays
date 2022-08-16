// import { renderProduct } from "../../components/makeProductCatalogue.js";

import { createProductCatalogue } from "../../components/createHtmlElements/createHtmlObjects.js";

const productsContainer = document.querySelector(".products-container");

export async function getItems(url) {
  try {
    const response = await fetch(url);
    const products = await response.json();

    productsContainer.innerHTML = "";
    if (!products.length) {
      productsContainer.innerHTML = `<p>No Item Found</p>`;
    } else {
      products.forEach((product) => renderProduct(product, productsContainer));
      return products;
    }
  } catch (e) {
    console.log(e);
  }
}

function renderProduct(product, parent) {
  const productHTML = createProductCatalogue(product);
  parent.append(productHTML);
}
