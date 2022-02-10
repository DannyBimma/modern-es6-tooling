////////////////////////////////////////////////////////////////////
// Imported Module:
// Importing Named Modules:
// import { addToCart, totalCost, itemTotal } from './cart.js';

// Call imported function:
// addToCart(`Ferrari SF90 Stradales`, 8);
// Log imported variables:
// console.log(totalCost, itemTotal);

import * as cart from './cart.js';

console.log(`Imported Module`);

cart.addToCart(`Ferrari 488s`, 8);
console.log(cart.totalCost, cart.itemTotal);

cart.addToCart(`Pizzas`, 7500);
cart.addToCart(`Macaroons`, 8576587346);

console.log(cart.cartItems);
////////////////////////////////////////////////////////////////////

// Importing default modules:
import partsTotal from './cart.js';
partsTotal(`Ferrari 488`, `Whipple Turbo Charger`, 80.42);

////////////////////////////////////////////////////////////////////
// TOP-LEVEL AWAIT (ES2022):

// const fakeResponse = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const fakeJson = await fakeResponse.json();
// console.log(fakeJson);

// p.s. - Top level await blocks the execution of all the code in the
// script that comes after it, until it's execution is complete.

// Get the last post from the fake data:
const getLastPost = async function () {
  const fakeResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  );
  const fakeJson = await fakeResponse.json();
  console.log(fakeJson);

  return { title: fakeJson.at(-1).title, text: fakeJson.at(-1).body };
};

// Consume the promise returned:
// const lastPost = getLastPost();
// lastPost.then(lp => console.log(lp));

const lastPost = await getLastPost();
console.log(lastPost);
// p.s. - notice how the async function still executes and logs all
// the json data, while still returning a specific value from all
// the data.

////////////////////////////////////////////////////////////////////
// THE MODULE PATTER:
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };
  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
////////////////////////////////////////////////////////////////////
