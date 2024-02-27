const express = require('express');
const app = express();
const port = 3000;

// Dummy array of products
let products = [
  { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
  { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
  { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
  { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
  { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
];

// Middleware to parse JSON request body
app.use(express.json());

// Route to get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Route to get a specific product by ID
app.get('/products/search/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

// Route to search for products based on query parameters
app.get('/products/search', (req, res) => {
  const { q, minPrice, maxPrice } = req.query;
  let filteredProducts = [...products];
  if (q) {
    filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
  }
  if (minPrice) {
    filteredProducts = filteredProducts.filter(p => p.price >= parseFloat(minPrice));
  }
  if (maxPrice) {
    filteredProducts = filteredProducts.filter(p => p.price <= parseFloat(maxPrice));
  }
  res.json(filteredProducts);
});



// Route to create a new product
app.post('/products', (req, res) => {
    const product = req.body
    const id = products.length + 1;
    const newProduct = { id, ...product };
    products.push(newProduct);
    res.status(201).json(newProduct);
//   const { name, price } = req.body;
//   const newProduct = {
//     id: products.length + 1,
//     name,
//     price
//   };
//   products.push(newProduct);
//   res.status(201).json(newProduct);
});

// Route to update a product by ID
app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const { name, price } = req.body;
  const index = products.findIndex(p => p.id === productId);
  if (index !== -1) {
    products[index] = {
      ...products[index],
      name: name || products[index].name,
      price: price || products[index].price
    };
    res.json(products[index]);
  } else {
    res.status(404).send('Product not found');
  }
});

// Route to delete a product by ID
app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === productId);
  if (index !== -1) {
    products.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).send('Product not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});








// const express = require('express');

// const app = express();
// const port = 3000;

// let products = [
//     { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
//     { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
//     { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
//     { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
//     { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
// ];
  
// // return a list of all products.
// app.get('/products', (req, res) => {
//     res.send(products);
// });

// // return the details of a specific product identified by its ID.
// app.get('/products/:id', (req, res) => {
//     const product = products.find(product => product.id === parseInt(req.params.id));
//     if (!product) {
//         return res.status(404).send('Product not found');
//     }
//     res.send(product);
// });

// // search for products based on query parameters: q, minPrice, maxPrice.
// app.get('/products/search', (req, res) => {
//     const { q, minPrice, maxPrice } = req.query;

//     let filteredProducts = products;
//     if (q) {
//         filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(q.toLowerCase()));
//     }
//     if (minPrice) {
//         filteredProducts = filteredProducts.filter(product => product.price >= parseFloat(minPrice));
//     }
//     if (maxPrice) {
//         filteredProducts = filteredProducts.filter(product => product.price <= parseFloat(maxPrice));
//     }

//     res.send(filteredProducts);
// });


// // create a new product.
// app.post('/products', (req, res) => {
//     const newProduct = req.body;
//     const checkProduct = products.find(product => product.id === newProduct.id);
//     if (checkProduct) {
//         return res.status(400).send("The provided product already exists.");
//     } else {
//         const newProductId = products.length + 1;
//         newProduct.id = products.length() + 1;
//         products.push(newProduct);
//         res.status(201).send('product created successfully');
//     }
//     // if (!newProduct || !newProduct.name || !newProduct.price) {
//     //     return res.status(400).send('Name and price are required for creating a product.');
//     // }
// });

// // update the details of a specific product.
// app.put('/products/:id', (req, res) => {
//     const productId = req.params.id;
//     const updatedProduct = req.body;
//     const productIndex = products.findIndex(p => p.id === productId);
//     if(productIndex){
//         products[productIndex] = {...products[productIndex], ...updatedProduct};
//         res.status(200).send(`The product with the ID ${productId} has been updated.`);
//     }else {
//         res.status(404).send('product not found');
//     }
// });

// // delete a specific product.
// app.delete('/products/:id', (req, res) => {
//     const productId = parseInt(req.params.id);
//     const productExists = products.some((product)=> product.id == productId);
//     if(!productExists){
//         return res.status(404).send("This product does not exist.")
//     }
//     const filterProducts = products.filter((p) => p.id !== productId)
//     products = filterProducts;
//     res.status(200).send(`The product with the ID ${productId} has been deleted`)
// });



// app.listen(port, ()=>{
//     console.log(`Server is running on http://localhost:${port}`);
// });