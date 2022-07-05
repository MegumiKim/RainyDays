const productContainer = document.querySelector(".product-container");

export function createProductHtml(details) {
  productContainer.innerHTML = `
  <div class="product_img one">
  <img
    src="${details.images[0].src}"
    alt="${details.images[0].alt}"
  />
</div>
<div class="product-main-descriptions">
  <h1 class="product_name">${details.name}</h1>
  <p class="price">NOK 999</p>
  <div class="color_size_container">
    <div class="spec_container">
      <h3 class="color">COLOR</h3>
      <div class="form color">
        <input type="radio" id="yellow" name="color" value="yellow" />
        <label for="yellow">Yellow</label>
        <input type="radio" id="black" name="color" value="black" />
        <label for="black">Black</label>
        <input type="radio" id="blue" name="color" value="blue" />
        <label for="blue">Blue</label>
      </div>
    </div>
    <div class="spec_container">
      <h3 class="size">SIZE</h3>
      <div class="form size">
        <input type="radio" id="s" name="size" value="size_s" />
        <label for="s">S</label>
        <input type="radio" id="m" name="size" value="size_m" />
        <label for="m">M</label>
        <input type="radio" id="L" name="size" value="size_l" />
        <label for="L">L</label>
      </div>
    </div>
  </div>
</div>

<div class="add-to-container">
  <button class="cta specific add-button" data-product="1">
    Add to cart
  </button>
  <button class="heart"><i class="far fa-heart"></i></button>
</div>

<div class="spec">
  <h2>Specifications</h2>
  <div class="spec_container">
    <h3>MATERIALS</h3>
    <p>Polyester | Duck Down</p>
  </div>
  <div class="spec_container">
    <h3>activities</h3>
    <p>Hiking | Camping</p>
  </div>
  <div class="spec_container">
    <h3>TEMPERATURE</h3>
    <p>0 - 10 degree</p>
  </div>
</div>

<p class="product-text">
${details.description}
</p>
<div class="product_img two">
  <img
    src=""
    class="product_img sub"
    alt="woman in a yellow super comfy jacket lying on snow"
  />
</div>
<div id="reviews">
  <h2>Customer Reviews</h2>
  <div class="rating">
    <i class="fas fa-star"></i><i class="fas fa-star"></i
    ><i class="fas fa-star"></i><i class="fas fa-star"></i
    ><i class="fas fa-star-half-alt"></i>
    <p>(129)</p>
  </div>
  <ul class="reviews">
    <li>
      <p class="username one">Chritstine</p>
      Very warm & Comfortable, Recommended!
    </li>
    <li>
      <p class="username one">Mari</p>
      Nice jacket
    </li>
    <li>
      <p class="username one">Sara</p>
      Bought for myself and buying again as a gift.
    </li>
  </ul>
</div>
<div class="product_img three">
  <img
    src="/images/products/specific/detail_2.png"
    alt="close up picture of super comfy jacket"
  />
</div>

<section class="more-products">
  <h2>You may also like:</h2>
  <div class="products-container"></div>
</section>
  `;
}
