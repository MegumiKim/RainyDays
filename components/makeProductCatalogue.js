const productsContainer = document.querySelector(".products-container");

export function makeProductCatalogue(product) {
  productsContainer.innerHTML += `
  <a href="/pages/product-specific/product_specific.html?id=${product.id}" class="product">
  <img class="product-image"
src="${product.images[0].src}"
    alt="${product.altText}">
    </img>
<div class="product-description">
<div class="product-name">${product.name}</div>
<p class="price">NOK ${product.prices.price}</p>
</div>
</a>`;
}
