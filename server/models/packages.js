var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var packages = new Schema(
    {
        src: { type: String },
        title: { type: String },
        text: { type: String },
        link: { type: String },
        name: { type: String },
        message: { type: String }
    }
);

module.exports = mongoose.model('packages', packages);