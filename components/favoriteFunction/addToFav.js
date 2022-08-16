import {
  addToLocalStorage,
  loadFromStorage,
  removeFromStorage,
} from "../../constants/storage/localStorage.js";

export function addToFav(event) {
  event.target.classList.toggle("checked");
  event.target.classList.toggle("unchecked");

  const key = "favorites";
  const itemID = parseInt(this.id);
  const currentFavorites = loadFromStorage(key);

  const productExists = currentFavorites.find(function (fav) {
    return fav.id === itemID;
  });

  if (!productExists) {
    addToLocalStorage(event, key);
  } else {
    removeFromStorage(key, itemID);
    location.reload();
    // displayFav();
  }
}
