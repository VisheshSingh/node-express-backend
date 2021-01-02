const Product = require('../models/Product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    docTitle: 'Add Product',
    path: '/admin/add-product',
  });
};

exports.postProduct = (req, res, next) => {
  const { title, imageUrl, price, description } = req.body;

  const product = new Product(title, imageUrl, price, description);
  product.save();
  res.redirect('/');
};

exports.getAdminProducts = (req, res, next) => {
  res.render('admin/products', {
    docTitle: 'Admin Products',
    path: '/admin/products',
  });
};
