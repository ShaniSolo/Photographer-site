var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var order = new Schema(
    {
        name: { type: String },
        email: { type: String },
        phone: { type: String },
        package: { type: String },
        size: { type: String },
        message: { type: String }
    }
);
module.exports = mongoose.model('order', order);