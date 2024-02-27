// Import the 'http' module
const http = require('http');

const port = 3000;

const products = [
    {id: 1, name: 'Product A', price: 250.00},
    {id: 2, name: 'Product B', price: 50.00},
    {id: 3, name: 'Product C', price: 300.00}
];

const serve = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.write('<h1>Hello World!</h1>');
        res.end();
    } else if (req.url === '/products') {
        res.write('<h1>I am a list of products</h1>');
        res.write(`<table border="1"><tr><th>Products</th><th>Prices</th></tr>`);
        res.write(`<tr><td>${products[0].name}</td><td>${products[0].price}</td></tr>`);
        res.write(`<tr><td>${products[1].name}</td><td>${products[1].price}</td></tr>`);
        res.write(`<tr><td>${products[2].name}</td><td>${products[2].price}</td></tr>`);
        res.write('</table>');
        res.end();
    } else if (req.url === '/users') {
        res.write('<h1>I am a list of users</h1>');
        res.end();
    }
});

serve.listen(port, console.log(`Server is running on port: ${port}`));
