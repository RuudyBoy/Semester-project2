import { getExistingProducts } from "./utils/productFunctions.js";
import createMenu from "./common/createMenu.js";
import displayMessage from "./common/displayMessage.js";

createMenu();

const productsInCart = getExistingProducts();

const cartContainer = document.querySelector(".cart");



productsInCart.forEach((cart) => {

    cartContainer.innerHTML += `<div class="cart-product">
    <h2>${cart.title}</h2>
    <img class"cart-image" src="${cart.image_url}"> 
    <p> $${cart.price} </p>
    <a class="cta-button" href="products.html" > Products view</a>
</div>`;
   
  }
  
);


