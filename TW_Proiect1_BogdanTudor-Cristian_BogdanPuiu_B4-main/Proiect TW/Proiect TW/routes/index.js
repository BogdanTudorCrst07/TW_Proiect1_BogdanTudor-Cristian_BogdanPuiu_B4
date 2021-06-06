const {Router} =require('../utilities/Router')
const indexController=require('../controller/index')
const faq=require('./faq')
const mainPage=require('./mainPage')
var router=new Router()

router.use('',mainPage)
router.use('',faq)

//router.get('//logoRecipeCentralNormal-01.png',index)
//adding a function for every request


//router.get('/Recipes/recipes.html',indexController.getIndexHTML)

module.exports.index=router