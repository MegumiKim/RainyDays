import {
  createElement,
  createProductImg,
  createProductDescription,
  createAddToCartButtonContainer,
  createAddToFavButton,
  createProductText,
  createVariations,
  createTotalContainer,
  createTrash,
  createRemoveFromFavButton,
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
  const rightContainer = createElement("div", "right-column", undefined, [
    productDescription,
    variations,
    AddToCartButtonContainer,
    productText,
  ]);
  const childItems = [img, rightContainer];

  const element = document.createElement("div", "main_column", undefined);
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

export function createFavoriteItem(product) {
  const img = createProductImg(product, "product-image-cart");
  const name = createElement("h3", "product-name", product.name);
  const price = createElement("p", "price", `Price: NOK ${product.price}`);
  const heart = createRemoveFromFavButton(product);
  const element = createElement("div", "favorite", undefined, [
    img,
    name,
    heart,
    price,
  ]);

  return element;
}
