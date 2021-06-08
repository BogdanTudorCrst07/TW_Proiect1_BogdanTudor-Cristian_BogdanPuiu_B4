const {Router}=require('../utilities/Router')
const addController=require('../controller/addRecipeController')


var router=new Router()

router.get('/AddRecipePage/addR.html',addController.getHTML)
router.get('/AddRecipePage/addR.css',addController.getCSS)
router.get('/AddRecipePage/background-img.png',addController.getBk)
router.get('/AddRecipePage/logoRecipeCentralNormal-01.png',addController.getLogo)
router.get('/AddRecipePage/addR.js',addController.getScript)
router.post('/add/recipe',addController.addRecipe)

module.exports=router



