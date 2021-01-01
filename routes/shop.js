const path = require('path');

const express = require('express');
const products = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('Shop.js: ', products);
  res.render('shop');
});

module.exports = router;
