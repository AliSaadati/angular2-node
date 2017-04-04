var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    flavor: {type: String, required: true},
    size: {type: String, required: true},
    amount: {type: Number, required: true},
    productId: {type: String, unique: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Products', schema);