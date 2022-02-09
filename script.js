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
