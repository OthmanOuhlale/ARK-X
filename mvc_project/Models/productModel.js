const products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
];

class Product {
    static getAllProducts(){
        return products;
    }
};

module.exports = Product;















// class Product {
//     constructor(id, name, price) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//     }

//     static getAllProducts() {
//         return products;
//     }

//     static getProductById(id) {
//         return products.find(product => product.id === id);
//     }

//     static addProduct(product) {
//         products.push(product);
//     }
// }