const { Router } = require('../utilities/Router')
const loginController = require('../controller/loginController')

var router = new Router()

router.get('/Login/login.html', loginController.getLoginHTML)
router.get('/Login/login.css', loginController.getLoginCSS)
router.get('/Login/logoRecipeCentralNormal-01.png', loginController.getImage)
router.get('/Login/background-img.png', loginController.getBk)
router.get('/Login/favicon.ico', loginController.getIcon)
router.get('/Login/login.js',loginController.getScript)

module.exports = router