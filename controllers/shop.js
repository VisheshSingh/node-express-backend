const Cart = require('../models/Cart');
const Product = require('../models/Product');

// @desc    Get all products - Homepage
// @route   GET /
// @access  Public
exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
      });
    })
    .catch((err) => console.log(err));
};

// @desc    Get all products
// @route   GET /products
// @access  Public
exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products',
      });
    })
    .catch((err) => console.log(err));
};

// @desc    Get Single Product
// @route   GET /product/:productId
// @access  Public
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then((product) => {
      res.render('shop/product-details', {
        product: product,
        pageTitle: product.title,
        path: '/products',
      });
    })
    .catch((err) => console.log(err));
};

// @desc    Get Cart
// @route   GET /cart
// @access  Public
exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then((cart) => {
      cart.getProducts().then((products) => {
        res.render('shop/cart', {
          pageTitle: 'Your Cart',
          path: '/cart',
          products: products,
        });
      });
    })
    .catch((err) => console.log(err));
};

// @desc    Post to Cart
// @route   POST /cart
// @access  Public
exports.postCart = (req, res, next) => {
  const productId = req.body.productId;
  Product.findById(productId, (product) => {
    Cart.addProduct(productId, product.price);
  });
  res.redirect('/cart');
};

exports.postDeleteCartProduct = (req, res, next) => {
  const productId = req.body.productId;
  Product.findById(productId, (product) => {
    Cart.deleteProduct(productId, product.price);
  });
  res.redirect('/cart');
};

// @desc    Get Orders
// @route   GET /orders
// @access  Public
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'Your Orders',
    path: '/orders',
  });
};
