import { addToLocalStorage } from "../../constants/storage/localStorage.js";
import { getItems } from "../../pages/products/getItems.js";
import { sortItemsByCategory } from "../../pages/products/sortItemsByCategory.js";
import { addToCart } from "../cart/addToCart.js";
import { removeFromCart } from "../cart/removeFromCart.js";
import { addToFav } from "../favoriteFunction/addToFav.js";
import { createElement } from "./createElement.js";

export function createProductDescription(product, productPrice, headingTag) {
  const price = createElement("p", "price", `Price: NOK ${productPrice}`);
  const name = createElement(headingTag, "name", product.name);
  const element = createElement("div", "product-description", undefined, [
    name,
    price,
  ]);
  element.classList.add("catalogue");
  return element;
}

export function createProductImg(product, imgClass) {
  const childElement = createElement(
    "img",
    imgClass,
    undefined,
    undefined,
    product.src,
    product.alt
  );
  const element = createElement("div", "product_img", undefined, [
    childElement,
  ]);

  return element;
}

export function createAddToCartButtonContainer(product) {
  const addToCartButton = createAddToCartButton(product);
  const addToFavButton = createAddToFavButton(product);

  const element = createElement("div", "add-to-container", undefined, [
    addToCartButton,
    addToFavButton,
  ]);

  return element;
}

function createAddToCartButton(product) {
  const element = createElement("button", "cta", "Add to Cart");
  element.id = product.id;
  element.name = product.name;
  element.src = product.images[0].src;
  element.price = parseInt(product.prices.price);
  element.type = "submit";
  element.addEventListener("click", addToCart);
  return element;
}

export function createAddToFavButton(product) {
  const element = createElement(
    "button",
    "heart",
    '<i class="far fa-heart unchecked">'
  );
  element.id = product.id;
  element.name = product.name;
  element.src = product.images[0].src;
  element.price = parseInt(product.prices.price);
  element.addEventListener("click", addToFav);
  return element;
}

export function createRemoveFromFavButton(product) {
  const element = createElement(
    "button",
    "heart",
    '<i class="far fa-heart checked">'
  );
  element.id = product.id;
  element.name = product.name;
  element.src = product.src;
  element.price = parseInt(product.price);
  element.addEventListener("click", addToFav);
  return element;
}

export function createProductText(product) {
  return createElement("p", "product-text", product.description);
}

export function createVariations(product) {
  const element = createElement("form", "size", undefined);

  const variations = product.variations;
  variations.forEach((variation) => {
    const id = variation.id;
    const size = variation.attributes[0].value;

    const radioButton = createElement("input", "size_p", undefined);
    radioButton.id = id;
    radioButton.name = "size";
    radioButton.type = "radio";

    const label = createElement("label", "size_label", size);
    label.for = radioButton.id;
    element.append(radioButton, label);

    radioButton.addEventListener("change", function () {
      console.log(id);
    });
  });

  return element;
}

export function createTrash(product) {
  const element = createElement(
    "button",
    "trash",
    '<i class="fa-solid fa-trash"></i>'
  );

  element.id = product.id;
  element.onclick = removeFromCart;

  return element;
}

export function createTotalHtml(total, totalItems, parent) {
  parent.innerHTML += `
  <div class="num-of-items">${totalItems} item(s)</div>
  <div class="total">Total: NOK ${new Intl.NumberFormat().format(total)}</div>
  `;
}

export function createNumberOfEachItem(product) {
  const element = createElement(
    "p",
    "number-of-item",
    `${product.numberOfEachItem} item(s)`
  );
  return element;
}

export function createSelectProductForm(product) {
  const variations = createVariations(product);
  const AddToCartButtonContainer = createAddToCartButtonContainer(product);
  const element = createElement("form", "select-product-form", undefined, [
    variations,
    AddToCartButtonContainer,
  ]);

  element.onsubmit = function () {
    window.location.href = "/pages/order-confirmation/confirmation.html";
  };

  return element;
}

// export async function createRelatedProducts(categoryID) {
//   const title = createElement("h2", "related-title", "Related Products");
//   const element = createElement("div", "related-products", undefined, [title]);

//   const url = "http://localhost/rainydays/wp-json/wc/store/products/";
//   const categoryUrl = url + `?category=${categoryID}`;
//   const productsContainer = document.querySelector(".products-container");
//   const relatedItems = await getItems(categoryUrl, productsContainer);

//   console.log(relatedItems);
//   return element;
// }
