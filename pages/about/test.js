import { productArray } from "../../constants/productsList.js";
const container = document.querySelector(".test-container");

// productArray.forEach(renderProduct);

// const newArray = productArray.map(renderProduct);
// console.log(newArray);

function renderProduct(product) {
  const productHTML = createHtmlObject(product);
  container.append(productHTML);
}

function createHtmlObject(product) {
  const element = document.createElement("div");
  element.classList.add("product");
  element.addEventListener("click", console.log);
  element.innerText = product.name;
  return element;
}

productArray.map(renderProduct);
// productArray.forEach((product) => {
//   renderProduct(product);
// });
