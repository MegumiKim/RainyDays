import { createProductCatalogue } from "../../components/createHtmlElements/createHtmlObjects.js";
import { displayMessage } from "../../components/displayMessage.js";

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
    productsContainer.innerHTML = displayMessage(
      "error",
      "Failed to fetch data"
    );
  }
}

function renderProduct(product, parent) {
  const productHTML = createProductCatalogue(product);
  parent.append(productHTML);
}
