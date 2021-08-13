var modelPictures = require('../models/pictures');

exports.post = function (req, res){
    var getPictures = new modelPictures({
        type: req.body.type,
        images: req.body.images,
    });

    getPictures.save(function (err, data, next) {
        modelPictures.find()
            .exec(function (err, list) {
                if (err) return next(err);
                console.log(list);
            })
        if (err) return next(err);
        res.send("the orderId " + data._id);
    })
}


exports.get_pictures = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    modelPictures
        .find()
        .exec(function (err, list) {
            if (err) return next(err);
            res.json(list);
        });
};
