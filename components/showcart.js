const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

export function showCart(items) {
  cart.style.display = "flex";

  cartList.innerHTML = "";
  let total = 0;
  items.forEach(function (item) {
    console.log(cartList);
    total += item.price;
    cartList.innerHTML += `
    <div style="background-image: url(${item.image})" class='cart-image'></div>
    <h4>${item.name}</h4>
    </div>
    `;
  });
  totalContainer.innerHTML = `Total: NOK ${total}`;
}
