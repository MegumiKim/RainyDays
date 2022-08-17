import { addToCart } from "../cart/addToCart.js";
import { removeFromCart } from "../cart/removeFromCart.js";
import { addToFav } from "../favoriteFunction/addToFav.js";
import { createElement } from "./createElement.js";

export function createProductDescription(product, productPrice, headingTag) {
  const price = createElement("p", "price", `Price: NOK ${productPrice}`);
  const name = createElement(headingTag, "name", product.name);
  const numberOfItem = createNumberOfEachItem(product);
  const element = createElement("div", "product-description", undefined, [
    name,
    price,
    numberOfItem,
  ]);

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

  element.addEventListener("click", addToCart);
  // element.addEventListener("click", saveToStorage("cartItems", product.name));
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
  const element = createElement("div", "size");

  const variations = product.variations;
  variations.forEach((variation) => {
    const attributes = variation.attributes;
    attributes.forEach((attribute) => {
      const childElement = createElement("button", "size_p", attribute.value);
      const chosenSize = attribute.value;
      childElement.addEventListener("click", function () {
        console.log(chosenSize);
      });

      element.append(childElement);
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
  element.dataset.id = parseInt(product.id);
  // element.addEventListener("click", removeFromCart(event));
  console.log(element.dataset.id);

  return element;
}

// export function createTotalContainer() {
//   const total = createElement("div", "total");
//   return total;
// }

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
