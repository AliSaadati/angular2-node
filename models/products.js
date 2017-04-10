var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    flavor: {type: String, required: true},
    details: [{type: Schema.Types.ObjectId, ref: 'ProductDetails'}]
});

var details = new Schema({
    amount: {type: Number, required: true},
    size: {type: String, unique: true, required: true},
    id: {type: String, unique: true, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Products', schema);
module.exports = mongoose.model('ProductDetails', details);