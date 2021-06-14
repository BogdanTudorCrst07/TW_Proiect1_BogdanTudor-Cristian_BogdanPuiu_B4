const {Router}=require('../utilities/Router')
const contactController=require('../controller/contactController')

var router=new Router

router.get('/Contact/contactindex.html',contactController.getIndexHTML)
router.get('/Contact/contactstyle.css',contactController.getIndexCSS)
router.get('/Contact/twitter-icon-01.png',contactController.getTwitter)
router.get('/Contact/contactus-backgrounf-01.png',contactController.getBk)
router.get('/Contact/logoRecipeCentralNormal-01.png',contactController.getLogo)
router.get('/Contact/instagram-icon-01.png',contactController.getInsta)
router.get('/Contact/phone-icon-01.png',contactController.getPhone)
router.get('/Contact/facebook-icon-01.png',contactController.getFacebook)
router.get('/Contact/email-icon-01.png',contactController.getEmail)
router.get('/Contact/adress-icon-01.png',contactController.getAdress)
router.get('/Contact/linkedin-icon-01.png',contactController.getLinked)
router.get('/Contact/favicon.ico',contactController.getIcon)
router.get('/Contact/contact.js',contactController.getScript)

module.exports=router