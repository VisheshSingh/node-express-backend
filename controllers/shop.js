const Product = require('../models/Product');

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      prods: products,
      docTitle: 'Shop',
      path: '/',
    });
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products,
      docTitle: 'All Products',
      path: '/products',
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    docTitle: 'Cart',
    path: '/cart',
  });
};
