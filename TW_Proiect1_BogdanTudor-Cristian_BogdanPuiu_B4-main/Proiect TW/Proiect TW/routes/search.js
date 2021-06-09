const {Router} =require('../utilities/Router')
const searchController=require('../controller/searchController')

var router=new Router()

router.get('/SearchPage/search.html',searchController.getHTML)
router.get('/SearchPage/search.css',searchController.getCSS)
router.get('/SearchPage/logoRecipeCentralNormal-01.png',searchController.getImage)
router.get('/SearchPage/background-img.png',searchController.getBk)
router.get('/SearchPage/search.js',searchController.getScript)
router.get('/SearchPage/favicon.ico',searchController.getIcon)
router.post('/search/recipe',searchController.filterRecipes)

module.exports=router