var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var admin = new Schema(
    {
        name: { type: String },
        email: { type: String },
        phone: { type: String },
        password: { type: String },
    }
);

module.exports = mongoose.model('admin', admin);