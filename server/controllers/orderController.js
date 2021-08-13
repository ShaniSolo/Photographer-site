var modelOrder = require('../models/order');
var mailService = require('../services/mailService')


exports.post = function (req, res){
    var getOrder = new modelOrder({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        package: req.body.package,
        size: req.body.size,
        message: req.body.message,
    });

    getOrder.save(function (err, data, next) {
        modelOrder.find()
            .exec(function (err, list) {
                if (err) return next(err);
                mailService.email(req.body.email, req.body.name, req.body.package, req.body.size);
                console.log(list);
            })
        if (err) return next(err);
        res.send("the orderId " + data._id);
    })
}   

exports.get_orders = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    modelOrder
        .find()
        .exec(function (err, list) {
            if (err) return next(err);
            res.send(list);
        });
};

