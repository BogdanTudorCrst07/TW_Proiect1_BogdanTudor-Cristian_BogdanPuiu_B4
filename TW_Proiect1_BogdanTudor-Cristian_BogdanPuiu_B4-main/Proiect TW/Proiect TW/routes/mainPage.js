const {Router} =require('../utilities/Router')
const indexController=require('../controller/index')

var router=new Router()

router.get('/',indexController.getIndexHTML)
router.get('/PaginaPrincipala/index.html',indexController.getIndexHTML)
router.get('/styles.css',indexController.getIndexCSS)
router.get('/PaginaPrincipala/styles.css',indexController.getIndexCSS)
router.get('/logoRecipeCentralNormal-01.png',indexController.getLogoCentral)
router.get('/PaginaPrincipala/logoRecipeCentralNormal-01.png',indexController.getLogoCentral)
router.get('/Front_Page_background-01.png',indexController.getFrontPageBk)
router.get('/PaginaPrincipala/Front_Page_background-01.png',indexController.getFrontPageBk)
router.get('/favicon.ico',indexController.getFavIcon)
router.get('/PaginaPrincipala/favicon.ico',indexController.getFavIcon)
router.get('/Description_div_image-01.png',indexController.getDescriptionImg)
router.get('/PaginaPrincipala/Description_div_image-01.png',indexController.getDescriptionImg)
router.get('/USER1-01.png',indexController.getUser1)
router.get('/PaginaPrincipala/USER1-01.png',indexController.getUser1)
router.get('/USER3-01.png',indexController.getUser3)
router.get('/PaginaPrincipala/USER3-01.png',indexController.getUser3)
router.get('/USER2-01.png',indexController.getUser2)
router.get('/PaginaPrincipala/USER2-01.png',indexController.getUser2)
router.get('/end_background-01.png',indexController.getEndBk)
router.get('/PaginaPrincipala/end_background-01.png',indexController.getEndBk)
router.get('/logo1-01.png',indexController.getLogoLabel1)
router.get('/PaginaPrincipala/logo1-01.png',indexController.getLogoLabel1)
router.get('/logo2-01.png',indexController.getLogoLabel2)
router.get('/PaginaPrincipala/logo2-01.png',indexController.getLogoLabel2)
router.get('/logo3-01.png',indexController.getLogoLabel3)
router.get('/PaginaPrincipala/logo3-01.png',indexController.getLogoLabel3)
router.get('/PaginaPrincipala/index.js',indexController.getScript)
router.get('/index.js',indexController.getScript)
module.exports=router