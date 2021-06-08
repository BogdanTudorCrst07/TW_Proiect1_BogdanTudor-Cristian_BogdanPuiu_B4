const { Router } = require('../utilities/Router')
const registerController = require('../controller/registerController')

var router=new Router()

router.get('/Register/register.html',registerController.getRegisterHTML)
router.get('/Register/register.css',registerController.getRegisterCSS)
router.get('/Register/logoRecipeCentralNormal-01.png',registerController.getImage)
router.get('/Register/background-img.png',registerController.getBk)
router.get('/Register/favicon.ico',registerController.getIcon)
router.get('/Register/register.js',registerController.getScritp)
router.post('/register/user',registerController.register)

module.exports=router