var router = require('express').Router();

router.use('/user', require('./user'));
router.use('/wine', require('./wine'));
//router.use('/shop', require('/shop'));

module.exports = router;
