import { productArray } from "./productsList.js";

const productsContainer = document.querySelector(".products-container");

productArray.forEach(function (product) {
  productsContainer.innerHTML += `
    <a href="product_specific.html" class="product">

      <img class="product-image" 
    src="${product.image}"
        alt="${product.altText}">
        </img>
    <div class="product-description">
    <div class="product-name">${product.name}</div>
    <p class="price">NOK ${product.price}</p>
    <p class="seasons">${product.seasons}</p>
  </div>
  </a>
    `;
});
