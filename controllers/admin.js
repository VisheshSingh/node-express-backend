const Product = require('../models/Product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    docTitle: 'Add Product',
    path: '/admin/add-product',
  });
};

exports.postProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getAdminProducts = (req, res, next) => {
  res.render('admin/products', {
    docTitle: 'Admin Products',
    path: '/admin/products',
  });
};
