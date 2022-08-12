import {
  createProductImg,
  createProductDescription,
  createAddToCartButtonContainer,
  createProductText,
  createVariations,
  createTotalContainer,
} from "./createElements.js";

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
  const childItems = [img, productDescription];
  const element = document.createElement("div");
  element.append(...childItems);
  return element;
}
