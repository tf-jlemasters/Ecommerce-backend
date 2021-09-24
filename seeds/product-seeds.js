const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 17.99,
    stock: 70,
    category_id: 1,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 26,
    category_id: 2,
  },
  {
    product_name: 'Peach Pit Vinyl Record',
    price: 12.99,
    stock: 45,
    category_id: 3,
  },
  {
    product_name: 'NY Mets Baseball Hat',
    price: 22.99,
    stock: 21,
    category_id: 4,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 18,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

