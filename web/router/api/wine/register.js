var router = require('express').Router();
var Wine = require('../../../../models/Wine');

router.get('/', function(req, res) {
    Wine.find({}).then(function(wine) {
        res.json(wine);
    });
});

router.post('/', function(req, res){
    var name = req.body.name;
    var type = req.body.type;
    var year = req.body.year;
    var price = req.body.price;

    var newWine = new Wine({
        name: name,
        type: type,
        year: year,
        price: price
    }).save().then(function(wineSaved) {
        res.json(wineSaved);
    });
});
module.exports = router;