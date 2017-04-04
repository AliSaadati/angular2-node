var express = require('express');
var router = express.Router();
var Products = require('../models/products');
var bcrypt = require('bcryptjs');

router.patch('/add', function (req, res) {

  var uniqueId = req.body.flavor + req.body.size;

  var product = new Products({
    flavor: req.body.flavor,
    size: req.body.size,
    amount: req.body.amount,
    productId: uniqueId
  });

  Products.findOne({ productId: uniqueId }, function (err, todo) {
    if (err) {
      return res.status(500).json({
        title: 'Error accessing database',
        error: err
      });
    }
    if (!todo) {
      product.save(function (err, result) {
        if (err) {
          return res.status(500).json({
            title: 'Error saving entry',
            error: err
          });
        } else {
          res.status(201).json({
            message: 'Entry Saved Successfully',
            obj: result
          });
        }
      });
    } else {
      todo.amount = parseInt(todo.amount) + parseInt(req.body.amount);
      todo.save(function(err, result) {
        if (err) {
          return res.status(500).json({
            title: 'Error saving entry',
            error: err
          });
        } else {
          res.status(201).json({
            message: 'Entry Updated Successfully',
            obj: result
          });
        }
      });
    }
  });
});

module.exports = router;
