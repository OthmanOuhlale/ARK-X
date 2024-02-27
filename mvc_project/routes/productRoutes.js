const express = require('express');
const { getAllProducts, getProductById, addProduct} = require('../Controllers/productController.js')

const productRouter = express.Router();

productRouter.get('/', getAllProducts);
// productRouter.get('/', getProductById);
// productRouter.post('/', addProduct);


module.exports = productRouter;