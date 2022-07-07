const parent = document.querySelector(".products-container");

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

export function renderProduct(product, parent) {
  const productHTML = createHtmlObject(product);
  parent.append(productHTML);
}

function createHtmlObject(product) {
  const linkUrl = `/pages/product-specific/product_specific.html?id=${product.id}`;
  const image = createImage(product.images[0].src);
  const description = createProductDescription(
    product.name,
    product.prices.price
  );
  const element = document.createElement("a");
  element.classList.add("product");
  element.href = linkUrl;

  element.append(image);
  element.append(description);
  return element;
}

function createProduct(linkUrl, children) {
  const singleProduct = document.createElement("a");
  singleProduct.classList.add("product");
  singleProduct.href = linkUrl;

  const childItemElement = document.createElement("div");
  childItemElement.append(...children);
  singleProduct.append(childItemElement);

  return singleProduct;
}

function createImage(imgSrc) {
  const image = document.createElement("img");
  image.classList.add("product-image");
  image.src = imgSrc;
  return image;
}

function createProductDescription(name, price) {
  const element = document.createElement("div");
  element.classList.add("product-description");

  const productName = document.createElement("div");
  productName.classList.add("product-name");
  productName.innerText = name;

  const productPrice = document.createElement("p");
  productPrice.classList.add("price");
  productPrice.innerText = price;

  element.append(productName);
  element.append(productPrice);
  console.log(productName, productPrice);
  return element;
}

// function createHtmlObject(product) {
//   const linkUrl = `/pages/product-specific/product_specific.html?id=${product.id}`;
//   const imgSrc = product.images[0].src;
//   const name = product.name;
//   const price = product.prices.price;

//   const image = createImage(imgSrc);
//   const description = createProductDescription(name, price);

//   const childItems = [image, description];
//   const item = createProduct(linkUrl, childItems);

//   console.log(childItems);
//   return item;
// }
