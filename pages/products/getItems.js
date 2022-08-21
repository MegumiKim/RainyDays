import { createProductCatalogue } from "../../components/createHtmlElements/createHtmlObjects.js";
import { displayMessage } from "../../components/displayMessage.js";

export async function getItems(url, parent) {
  try {
    const response = await fetch(url);
    const products = await response.json();

    parent.innerHTML = "";
    if (!products.length) {
      parent.innerHTML = `<p>No Item Found</p>`;
    } else {
      products.forEach((product) => renderProduct(product, parent));
      return products;
    }
  } catch (e) {
    console.log(e);
    parent.innerHTML = displayMessage("error", "Failed to fetch data");
  }
}

function renderProduct(product, parent) {
  const productHTML = createProductCatalogue(product);
  parent.append(productHTML);
}
