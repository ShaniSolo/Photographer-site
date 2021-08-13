var modelPackages = require('../models/packages');

exports.post = function (req, res){
    var getPackages = new modelPackages({
        src: req.body.src,
        title: req.body.title,
        text: req.body.text,
        link: req.body.link,
        name: req.body.name,
        message: req.body.message,
    });

    getPackages.save(function (err, data, next) {
        modelPackages.find()
            .exec(function (err, list) {
                if (err) return next(err);
                console.log(list);
            })
        if (err) return next(err);
        res.send("the packageId " + data._id);
    })
}


exports.get_package = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    modelPackages
        .find()
        .exec(function (err, list) {
            if (err) return next(err);
            res.send(list);
        });
};
