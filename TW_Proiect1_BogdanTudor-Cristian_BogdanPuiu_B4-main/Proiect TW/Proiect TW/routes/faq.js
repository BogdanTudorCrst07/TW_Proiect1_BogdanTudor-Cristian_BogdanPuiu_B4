const {Router} =require('../utilities/Router')
const faqController=require('../controller/faqPageController')

var router=new Router()

router.get('/FAQ/faqindex.html',faqController.getIndexHTML)
router.get('/FAQ/faqstyle.css',faqController.getIndexCSS)
router.get('/FAQ/logoRecipeCentralNormal-01.png',faqController.getImage)
router.get('/FAQ/background-title-01.jpg',faqController.getBkTitle)
router.get('/FAQ/favicon.ico',faqController.getIcon)
router.get('/FAQ/faq.js',faqController.getScript)
module.exports=router