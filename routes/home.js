var express = require('express');
var router = express.Router();
var Products = require('../models/products');
var ProductDetails = require('../models/productdetails');

var bcrypt = require('bcryptjs');

router.post('/add', function (req, res) {

  var uniqueId = req.body.flavor + req.body.size;

  ProductDetails.findOne({ id: uniqueId }, function (err, todo_detail) {
    // Error in database
    if (err) {
      return res.status(500).json({
        title: 'Error accessing database',
        error: err
      });
    }
    // Specific item doesn't exist yet
    if (!todo_detail) {

      var detail = new ProductDetails({
        amount: req.body.amount,
        size: req.body.size,
        id: uniqueId
      });

      detail.save(function (err, result) {
        // Error saving details
        if (err) {
          return res.status(500).json({
            title: 'Error saving detail',
            error: err
          });
        }
        //Find flavor and add product to array
        Products.findOne({ flavor: req.body.flavor }, function (err, todo_product) {
          if (err) {
            return res.status(500).json({
              title: 'Error accessing database',
              error: err
            });
          }
          if (!todo_product) {
            var product = new Products({
              flavor: req.body.flavor
            });
            product.details.push(result);
            product.save(function (err, re) {
              if (err) {
                return res.status(500).json({
                  title: 'Error saving detail',
                  error: err
                });
              }
            });
          } else {
            todo_product.details.push(result);
            todo_product.save();
          }
          res.status(201).json({
            message: 'Product saved',
            obj: todo_product
          });
        });
      });
    } else {
      todo_detail.amount = parseInt(todo_detail.amount) + parseInt(req.body.amount);
      todo_detail.save(function (err, result) {
        if (err) {
          return res.status(500).json({
            title: 'Error updating entry',
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

router.get('/flavors', function(req, res) {
    Products.find().exec(function (err, product) {
        if (err) {
            return res.status(500).json({
                title: 'Error accessing database',
                error: err
            });
        }
        res.status(200).json({
            message: 'Got Flavors',
            obj: product
        });
    });
});

module.exports = router;
