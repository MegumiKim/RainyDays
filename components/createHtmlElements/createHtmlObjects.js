import { addToCart } from "../cart/addToCart.js";
import { createElement } from "./createElement.js";
import {
  createProductImg,
  createProductDescription,
  createAddToCartButtonContainer,
  createAddToFavButton,
  createProductText,
  createVariations,
  createTrash,
  createRemoveFromFavButton,
  createNumberOfEachItem,
  createSelectProductForm,
  // createRelatedProducts,
} from "./makeHtmlComponents.js";

export function createProductSpecificHtmlObject(product) {
  const img = createProductImg(product.images[0], "product-image");
  const productName = createElement("h1", "productName", product.name);
  const price = createElement("p", "price", `NOK ${product.prices.price}`);

  const variations = createVariations(product);
  const AddToCartButtonContainer = createAddToCartButtonContainer(product);
  const productText = createProductText(product);
  const rightContainer = createElement("div", "right-column", undefined, [
    productName,
    price,
    variations,
    AddToCartButtonContainer,
  ]);

  const categoryID = product.categories[0].id;
  // const relatedProducts = createRelatedProducts(categoryID);

  // const form = createSelectProductForm(product);
  const element = createElement("div", "specific-item", undefined, [
    img,
    rightContainer,
    // form,
    productText,
    // relatedProducts,
  ]);

  return element;
}

export function createProductCatalogue(product) {
  const linkUrl = `/pages/product-specific/product_specific.html?id=${product.id}`;
  const img = createProductImg(product.images[0], "product-image");
  const productDescription = createProductDescription(
    product,
    product.prices.price,
    "h3"
  );

  const element = createElement("a", "product", undefined, [
    img,
    productDescription,
  ]);
  element.href = linkUrl;

  return element;
}

export function createProductSummary(product) {
  const img = createProductImg(product, "product-image-cart");
  const productDescription = createProductDescription(
    product,
    product.price,
    "h3"
  );
  const childItems = [img, productDescription];
  const element = createElement("div", "product", undefined, childItems);
  return element;
}

export function createCartItem(product) {
  const img = createProductImg(product, "product-image-cart");
  const productName = createElement("h3", "product-name", product.name);
  const price = createElement("p", "price", `NOK ${product.price}`);
  const trash = createTrash(product);
  const numberOfItem = createNumberOfEachItem(product);
  const productDescription = createElement(
    "div",
    "product-description",
    undefined,
    [productName, price, trash, numberOfItem]
  );

  const childItems = [img, productDescription];
  const element = createElement("div", "cart-item", undefined, childItems);
  return element;
}

export function createFavoriteItem(product) {
  const img = createProductImg(product, "product-img");
  const name = createElement("h3", "product-name", product.name);
  const price = createElement("p", "price", `Price: NOK ${product.price}`);
  const heart = createRemoveFromFavButton(product);
  const children = createElement("div", "summary", undefined, [
    name,
    heart,
    price,
  ]);
  const element = createElement("div", "favorite", undefined, [img, children]);

  return element;
}
