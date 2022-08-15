import { displayMessage } from "../../components/displayMessage.js";
import { loadFromStorage } from "../../constants/storage/localStorage.js";
import { renderItem } from "../product-specific/renderItem.js";
const favorites = loadFromStorage("favorites");
const container = document.querySelector(".fav-container");

if (favorites.length) {
  favorites.forEach((favorite) => {
    renderItem(favorite, container);
  });
} else {
  container.innerHTML = displayMessage("error", "No item added");
}
