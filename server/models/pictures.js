var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pictures = new Schema(
    {
        type: { type: String },
        images: { type: Array },
    }
);

module.exports = mongoose.model('pictures', pictures);