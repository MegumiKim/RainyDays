import { displayMessage } from "../../components/displayMessage.js";
import { loadFromStorage } from "../../constants/storage/localStorage.js";
import { createFavoriteItem } from "../product-specific/createHtmlObjects.js";

const favorites = loadFromStorage("favorites");
const container = document.querySelector(".fav-container");

if (favorites.length) {
  favorites.forEach((favorite) => {
    renderItem(favorite, container);
  });
} else {
  container.innerHTML = displayMessage("error", "No item added");
}

function renderItem(product, parent) {
  const productHtml = createFavoriteItem(product);
  parent.append(productHtml);
}
