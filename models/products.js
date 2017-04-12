var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    flavor: {type: String, required: true},
    details: [{type: Schema.Types.ObjectId, ref: 'ProductDetails'}]
});

module.exports = mongoose.model('Products', productSchema);
