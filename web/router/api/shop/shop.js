var router require('express').router();

var Shop = require('../../../../../models/Shop');
var Caviste = require('../../../../../models/Caviste');
var Wine = require('../../../../../models/Wine');
var bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/', function(req, res) {
    Shop.find({}).then(function(shop) {
        res.json(shop);
    });
});

router.post('/', function(req, seq)){
    
}