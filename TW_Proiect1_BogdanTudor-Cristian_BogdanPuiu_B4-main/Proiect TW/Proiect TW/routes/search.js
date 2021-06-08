const {Router} =require('../utilities/Router')
const searchController=require('../controller/searchController')

var router=new Router()

router.get('/SearchPage/search.html',searchController.getHTML)
router.get('/SearchPage/search.css',searchController.getCSS)
router.get('/SearchPage/logoRecipeCentralNormal-01.png',searchController.getImage)
router.get('/SearchPage/background-img.png',searchController.getBk)


module.exports=router