var express = require('express');
var router = express.Router();
var packages_controller = require('../controllers/packagesController');
var admin_controller = require('../controllers/adminController');
var order_controller = require('../controllers/orderController');
var pictures_controller = require('../controllers/picturesController');

router.post('/packages' , packages_controller.post);
router.get('/packages', packages_controller.get_package);

router.post('/admin',admin_controller.post);
router.get('/admin', admin_controller.get_all_admin);
router.get("/admin/:name/:password", admin_controller.get_admin);

router.post('/order', order_controller.post);
router.get('/order', order_controller.get_orders);

router.post('/pictures', pictures_controller.post);
router.get('/pictures',pictures_controller.get_pictures);


module.exports = router;