// export function renderProduct(product, parent) {
//   const productHTML = createHtmlObject(product);
//   parent.append(productHTML);
// }

// function createHtmlObject(product) {
//   const linkUrl = `/pages/product-specific/product_specific.html?id=${product.id}`;
//   const image = createImage(product.images[0].src);
//   const description = createProductDescription(
//     product.name,
//     product.prices.price
//   );
//   const element = createElement(
//     "a",
//     "product",
//     [image, description],
//     undefined,
//     linkUrl
//   );

//   return element;
// }

// function createImage(imgSrc) {
//   return createElement(
//     "img",
//     "product-image",
//     undefined,
//     undefined,
//     undefined,
//     imgSrc
//   );
// }

// function createProductDescription(name, price) {
//   const productName = createElement("div", "name", undefined, name);
//   const productPrice = createElement("h3", "price", `NOK ${price}`);
//   return createElement("div", "product-description", [
//     productName,
//     productPrice,
//   ]);
// }

// function createElement(tagname, classes, children, text, link, src) {
//   const element = document.createElement(tagname);
//   element.classList.add(classes);

//   if (children) {
//     element.append(...children);
//   }
//   if (text) {
//     element.innerText = text;
//   }
//   if (link && tagname === "a") {
//     element.href = link;
//   }
//   if (src) {
//     element.src = src;
//   }

//   return element;
// }
