const buysell = require('../controllers/index.js')
const user = require('../controllers/userController.js')
const ad = require('../controllers/adController.js') 
const category = require('../controllers/categoryController.js')

var router = require("express").Router();

router.post('/signup', user.createUser)
router.post('/createAd', ad.createAd)
router.post('/createCategory', category.createCategory)
router.get('/category', category.viewCategory)
router.get('/category/:nameCategory', category.viewItemCategory)

router.get('/test', buysell.Test)

module.exports = router;