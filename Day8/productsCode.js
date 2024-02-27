"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productsData_1 = require("./productsData");
var productName = "tote bag";
var product = productsData_1.default.filter(function (product) { return product.name === productName; })[0];
// console.log(product);
if (product.preOrder === 'true') {
    console.log("your product has been shipped");
}
else {
    console.log("Wait to get shipped");
}
var shipping = 0;
var taxPercent;
var taxTotal;
var total = +product.price;
var shippingAddress = '575 Broadway, New York City, New York';
if (Number(product.price) >= 25) {
    console.log("free shipping for this product");
}
else {
    shipping = 5;
    total += shipping;
}
if (shippingAddress.match("New York")) {
    taxPercent = 0.1;
    taxTotal = total * taxPercent;
    total += taxTotal;
}
else {
    taxPercent = 0.05;
    taxTotal = total * taxPercent;
    total += taxTotal;
}
console.log("\nProduct name: ".concat(product.name, ", \nShipping address: ").concat(shippingAddress, ",\nPrice of the product: ").concat(product.price, ",\nTax total: ").concat(taxTotal, ",\nShipping: ").concat(shipping, ",\nTotal amount: ").concat(total, "\n"));
