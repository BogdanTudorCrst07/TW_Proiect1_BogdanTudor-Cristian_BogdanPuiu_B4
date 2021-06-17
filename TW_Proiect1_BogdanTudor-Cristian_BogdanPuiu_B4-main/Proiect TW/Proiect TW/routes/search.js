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
router.post('/delete/recipe',searchController.deleteItem)
router.post('/addPhoto/recipe',searchController.addPhoto)
router.post('/search/photo',searchController.getPhotos)
module.exports=router