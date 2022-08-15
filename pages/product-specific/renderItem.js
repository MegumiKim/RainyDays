import { createFavoriteItem } from "../product-specific/createHtmlObjects.js";

export function renderItem(product, parent) {
  const productHtml = createFavoriteItem(product);
  parent.append(productHtml);
}
