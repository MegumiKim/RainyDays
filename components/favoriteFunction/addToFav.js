// import {
//   loadFromStorage,
//   saveToStorage,
// } from "../../constants/storage/local.js";

import { addToLocalStorage } from "../../constants/storage/localStorage.js";

export function addToFav(event) {
  event.target.classList.toggle("checked");
  event.target.classList.toggle("unchecked");

  const key = "favorites";
  addToLocalStorage(event, "favorites");

  // const itemID = this.id;
  // const itemName = this.name;
  // const itemSrc = this.src;
  // event.target.classList.toggle("checked");
  // event.target.classList.toggle("unchecked");

  // const currentFavorites = loadFromStorage(key);

  // const productExists = currentFavorites.find(function (fav) {
  //   return fav.id === itemID;
  // });

  // if (!productExists) {
  //   const product = { id: itemID, name: itemName, src: itemSrc };
  //   currentFavorites.push(product);
  //   saveFavorites(currentFavorites);
  // } else {
  //   const newFavorites = currentFavorites.filter((fav) => fav.id !== itemID);
  //   saveFavorites(newFavorites);
  // }
}
