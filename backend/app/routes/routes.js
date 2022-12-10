const buysell = require('../controllers/index.js')
var router = require("express").Router();

router.post('/signup', buysell.createUser)
router.post('/createAd', buysell.createAd)
module.exports = router;