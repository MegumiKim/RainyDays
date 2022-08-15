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

  const element = createElement("div", "specific-item", undefined, [
    img,
    rightContainer,
  ]);
  // const element = document.createElement("div", "specific-item", undefined);
  // element.append(...childItems);
  return element;
}

export function createProductSummary(product) {
  const img = createProductImg(product, "product-image-cart");
  const productDescription = createProductDescription(
    product,
    product.price,
    "h3"
  );
  // const trash = createTrash(product);
  const childItems = [img, productDescription];
  const element = createElement("div", "product", undefined, childItems);
  return element;
}

export function createCartItem(product) {
  const img = createProductImg(product, "product-image-cart");
  const productDescription = createProductDescription(
    product,
    product.price,
    "h3"
  );
  const trash = createTrash(product);
  const childItems = [img, productDescription, trash];
  const element = createElement("div", "cart-item", undefined, childItems);
  return element;
}

export function createFavoriteItem(product) {
  const img = createProductImg(product, "product-image-cart");
  const name = createElement("h3", "product-name", product.name);
  const price = createElement("p", "price", `Price: NOK ${product.price}`);
  const heart = createRemoveFromFavButton(product);
  const element = createElement("div", "product", undefined, [
    img,
    name,
    heart,
    price,
  ]);

  return element;
}
