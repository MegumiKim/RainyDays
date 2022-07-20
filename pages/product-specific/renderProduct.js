// import { onClick } from "../../components/listner/onClick.js";
import { addToCart } from "../../components/cart/addToCart.js";
// import { addToFav } from "../../components/favoriteFunction/addToFav.js";
// import { cart } from "../../components/cart/addToCart.js";

export function renderSpecificProduct(product, parent) {
  const productHtml = createProductSpecificHtmlObject(product);
  const title = document.querySelector("title");
  title.innerHTML = "RAINYDAYS | " + product.name;
  parent.append(productHtml);
}

function createProductSpecificHtmlObject(product) {
  const img = createProductImg(product);
  const productDescription = createProductDescription(product);
  const AddToCartButtonContainer = createAddToCartButtonContainer(product);
  const productText = createProductText(product);
  const variations = createVariations(product);
  const childItems = [
    img,
    productDescription,
    AddToCartButtonContainer,
    productText,
    variations,
  ];

  const element = document.createElement("div");
  element.append(...childItems);
  return element;
}

function createElement(tagname, classes, innerHTML, children, src, altText) {
  const element = document.createElement(tagname);
  element.classList.add(classes);

  if (innerHTML) {
    element.innerHTML = innerHTML;
  }

  if (Array.isArray(children) && children.length) {
    element.append(...children);
  }

  if (src) {
    element.src = src;
  }

  if (altText) {
    element.altText = altText;
  }
  return element;
}

function createProductDescription(product) {
  const price = createElement(
    "p",
    "price",
    `Price: Kr ${product.prices.price}`
  );
  const name = createElement("h1", "name", product.name);
  const element = createElement("div", "product-main-descriptions", undefined, [
    name,
    price,
  ]);

  return element;
}

function createProductImg(product) {
  const childElement = createElement(
    "img",
    undefined,
    undefined,
    undefined,
    product.images[0].src,
    product.images[0].alt
  );
  const element = createElement("div", "product_img", undefined, [
    childElement,
  ]);

  return element;
}

function createAddToCartButtonContainer(product) {
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
  element.data = product.id;

  element.addEventListener("click", addToCart);
  // element.addEventListener("click", saveToStorage("cartItems", product.name));
  return element;
}

function createAddToFavButton(product) {
  const element = createElement("button", "heart", '<i class="far fa-heart">');
  // element.addEventListener("click", addToFav);
  return element;
}

function createProductText(product) {
  return createElement("p", "product-text", product.description);
}

function createVariations(product) {
  const element = createElement("div", "size");

  const variations = product.variations;
  variations.forEach((variation) => {
    const attributes = variation.attributes;
    attributes.forEach((attribute) => {
      const childElement = createElement("button", "size_p", attribute.value);
      element.append(childElement);
      // const element = createElement("div", "size", undefined, [childElement]);
    });
  });

  return element;
}
