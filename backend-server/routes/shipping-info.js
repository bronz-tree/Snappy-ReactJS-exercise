const express = require('express');
const router = express.Router();
const DB = require('../models/shipping.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', function(req, res, next) {
    DB.getShipping(res);
});

router.post('/create', function(req, res, next){
    DB.CreateShipping(req.body, res);
});

router.post('/update', function(req, res, next){
    DB.updateShipping(req.body, res);
});

router.post('/delete', function(req, res, next){
    DB.deleteShipping(req.body, res);
});

module.exports = router;
