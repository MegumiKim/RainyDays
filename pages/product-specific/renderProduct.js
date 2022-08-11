// import { onClick } from "../../components/listner/onClick.js";
import { addToCart } from "../../components/cart/addToCart.js";
import { removeFromCart } from "../../components/cart/removeFromCart.js";
import { addToFav } from "../../components/favoriteFunction/addToFav.js";

export function createProductSpecificHtmlObject(product) {
  const img = createProductImg(product.images[0], "product-image");
  const productDescription = createProductDescription(
    product,
    product.prices.price,
    "h1"
  );
  const AddToCartButtonContainer = createAddToCartButtonContainer(product);
  const productText = createProductText(product);
  const variations = createVariations(product);
  const childItems = [
    img,
    productDescription,
    variations,
    AddToCartButtonContainer,
    productText,
  ];

  const element = document.createElement("div");
  element.append(...childItems);
  return element;
}

export function createProductSummary(product) {
  const img = createProductImg(product, "product-image-cart");
  const productDescription = createProductDescription(
    product,
    product.price,
    "h3"
  );
  // const AddToCartButtonContainer = createAddToCartButtonContainer(product);
  // const trash = createTrash(product);
  const childItems = [img, productDescription];
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

function createProductDescription(product, productPrice, headingTag) {
  const price = createElement("p", "price", `Price: NOK ${productPrice}`);
  const name = createElement(headingTag, "name", product.name);
  const element = createElement("div", "product-main-descriptions", undefined, [
    name,
    price,
  ]);

  return element;
}

function createProductImg(product, imgClass) {
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
  element.id = product.id;
  element.name = product.name;
  element.src = product.images[0].src;
  element.price = parseInt(product.prices.price);

  element.addEventListener("click", addToCart);
  // element.addEventListener("click", saveToStorage("cartItems", product.name));
  return element;
}

function createAddToFavButton(product) {
  const element = createElement(
    "button",
    "heart",
    '<i class="far fa-heart unchecked">'
  );
  element.id = product.id;
  element.name = product.name;
  element.src = product.images[0].src;
  element.addEventListener("click", addToFav);
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
      childElement.addEventListener("click", function () {
        console.log(attribute.value);
      });

      element.append(childElement);

      // const element = createElement("div", "size", undefined, [childElement]);
    });
  });

  return element;
}

function createTrash(product) {
  const element = createElement(
    "button",
    "bin",
    '<i class="far fa-heart unchecked">'
  );
  // const element = createElement("i", "fa-trash");
  // element.id = trash;
  // removeFromCart();
  // return element;
}
