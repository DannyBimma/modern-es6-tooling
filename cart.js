////////////////////////////////////////////////////////////////////
// Named Exports:
// Exported Module:
console.log(`Exported Module`);

const shoppingBill = 10;
export const cartItems = [];

// Exporting a single variable:
export const addToCart = function (product, quantity) {
  cartItems.push({ product, quantity });
  console.log(`${quantity} ${product} was added to your cart!`);
};

const totalCost = 48753;
const itemTotal = 73857;

// Exporting multiple variables:
export { totalCost, itemTotal };
////////////////////////////////////////////////////////////////////

// Default Exports:
/*
Default exports are used in-case you only want to export son specific 
thing from a module, like the value of a function or operation.
*/

export default function (car, carPart, cost) {
  console.log(
    `The ${carPart} for your ${car} has been added to your cart. Your total is $${cost}!`
  );
}
