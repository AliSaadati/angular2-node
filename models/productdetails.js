var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var detailSchema = new Schema({
    amount: {type: Number, required: true},
    size: {type: String, required: true},
    id: {type: String, unique: true, required: true}
});

detailSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('ProductDetails', detailSchema);
