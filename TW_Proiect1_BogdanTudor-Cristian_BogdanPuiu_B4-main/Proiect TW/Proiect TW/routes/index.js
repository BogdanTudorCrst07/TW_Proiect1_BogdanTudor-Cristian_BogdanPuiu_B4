const {Router} =require('../utilities/Router')
const indexController=require('../controller/index')


var router=new Router()

router.get('/',indexController.getIndexHTML)
router.get('/styles.css',indexController.getIndexCSS)
router.get('/logoRecipeCentralNormal-01.png',indexController.getLogoCentral)
router.get('/Front_Page_background-01.png',indexController.getFrontPageBk)
router.get('/favicon.ico',indexController.getFavIcon)
router.get('/Description_div_image-01.png',indexController.getDescriptionImg)
router.get('/USER1-01.png',indexController.getUser1)
router.get('/USER2-01.png',indexController.getUser2)
router.get('/USER3-01.png',indexController.getUser3)
router.get('/end_background-01.png',indexController.getEndBk)
router.get('/logo1-01.png',indexController.getLogoLabel1)
router.get('/logo2-01.png',indexController.getLogoLabel2)
router.get('/logo3-01.png',indexController.getLogoLabel3)
//router.get('//logoRecipeCentralNormal-01.png',index)
//adding a function for every request


//router.get('/Recipes/recipes.html',indexController.getIndexHTML)

module.exports.index=router