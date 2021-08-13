var modelAdmin = require('../models/admin');
const jwt = require('jsonwebtoken');


exports.post = function (req, res){
    var getAdmin = new modelAdmin({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
    });

    

    getAdmin.save(function (err, data, next) {
        modelAdmin.find()
            .exec(function (err, list) {
                if (err) return next(err);
                console.log(list);
            })
        if (err) return next(err);
        res.send("the adminId " + data._id);
    })
}

exports.get_all_admin = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    modelAdmin
        .find()
        .exec(function (err, list) {
            if (err) return next(err);
            res.send(list);
        });
};

exports.get_admin = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { name, password } = req.params
    console.log(name, password);
    modelAdmin
        .findOne({ name })
        .exec(function (err, list) {
            console.log('on get admin', err, list);
            if (err) return next(err);
            if (list)
                if (list.password == password)
                    return res.send()
                else
                    return res.status(400).send('password dont match')
            else
                return res.status(400).send('user dont match')
        });
};
