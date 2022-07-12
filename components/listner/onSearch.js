import { renderProduct } from "../makeProductCatalogue.js";

export function onSearch(event, parent, productsList) {
  const target = event.target;
  const value = target.value;

  const filteredListOfProducts = filterProductsBasedOnSearch(
    productsList,
    value
  );
  renderProduct(filteredListOfProducts, parent);
}

export function filterProductsBasedOnSearch(products, term) {
  products.filter(function (product) {
    term = term.toLowerCase().trim();

    console.log(product);
    const valuesToCheck = [product.name, product.description];

    const matchingValues = valuesToCheck.filter(function (value) {
      value = value.toLowerCase().trim();
      return value.includes(term);
    });

    return matchingValues.length;
  });
}
