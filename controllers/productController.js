const Product = require('../models/Product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    docTitle: 'Add Product',
    path: '/admin/add-product',
  });
};

exports.postProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.render('shop', { prods: products, docTitle: 'Shop', path: '/' });
};
