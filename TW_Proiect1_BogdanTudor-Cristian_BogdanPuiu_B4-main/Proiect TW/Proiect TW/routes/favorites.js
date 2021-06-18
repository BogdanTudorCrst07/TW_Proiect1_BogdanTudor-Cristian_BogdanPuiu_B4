const {Router} =require('../utilities/Router')
const favoritesController=require('../controller/favoritesController')

var router=new Router()

router.get('/Favorites/favorites.html',favoritesController.getHTML)
router.get('/Favorites/favorites.css',favoritesController.getCSS)
router.get('/Favorites/logoRecipeCentralNormal-01.png',favoritesController.getImage)
router.get('/Favorites/favicon.ico',favoritesController.getIcon)
router.get('/Favorites/favorites.js',favoritesController.getScript)
router.get('/Favorites/background-img.png',favoritesController.getBkTitle)
router.post('/display/favorites',favoritesController.getFavorites)
router.post('/delete/favorite',favoritesController.deleteFavorite)
module.exports=router