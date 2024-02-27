import products from "./productsData";

let productName: string = "tote bag";
let product = products.filter(product => product.name === productName)[0]; 
// console.log(product);

if (product.preOrder === 'true') {
   console.log("your product has been shipped");
} else {
   console.log("Wait to get shipped");
}

let shipping: number = 0;
let taxPercent: number;
let taxTotal: number;
let total: number = + product.price;
let shippingAddress: string = '575 Broadway, New York City, New York';

if (Number(product.price) >= 25) {
  console.log("free shipping for this product");
} else {
  shipping = 5;
  total += shipping;
}

if(shippingAddress.match("New York")){
  taxPercent = 0.1;
  taxTotal = total * taxPercent;
  total += taxTotal;
} else {
  taxPercent = 0.05;
  taxTotal = total * taxPercent;
  total += taxTotal;
}

console.log(`
Product name: ${product.name}, 
Shipping address: ${shippingAddress},
Price of the product: ${product.price},
Tax total: ${taxTotal},
Shipping: ${shipping},
Total amount: ${total}
`);