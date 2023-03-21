import {
  addToLocalStorage,
  loadFromStorage,
  removeFromStorage,
} from "../../constants/storage/localStorage.js";
// import { createFavs } from "../../pages/my-page/myPage.js";
import { displayMessage, disappearMessage } from "../displayMessage.js";

const userMessage = document.querySelector(".user-message");

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
    // let userAlert = displayMessage("success", "Added to My Favorite");
    // userMessage.innerHTML = "";
    userMessage.innerHTML = displayMessage("success", "Added to My Favorite");
    setTimeout(disappearMessage, 3000);
  } else {
    removeFromStorage(key, itemID);
    userMessage.innerHTML = displayMessage(
      "success",
      "Removed From My Favorite"
    );
    setTimeout(disappearMessage, 3000);
    // createFavs();
  }
}
