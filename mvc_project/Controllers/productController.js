const Product = require('../Models/productModel.js');

exports.getAllProducts = (req, res) => {
    const allProducts = Product.getAllProducts();
    if(allProducts){
        res.send(allProducts);
    }
    
};

// res.render('index', { products: allProducts });

// exports.getProductById = (req, res) => {
//     const productId = req.params.id;
//     const product = Product.getProductById(productId);
//     res.render('product', { product });
// };

// exports.addProduct = (req, res) => {
//     const { id, name, price } = req.body;
//     const newProduct = new Product(id, name, price);
//     Product.addProduct(newProduct);
//     res.redirect('/');
// };
