const {Router} =require('../utilities/Router')
const faq=require('./faq')
const mainPage=require('./mainPage')
const contact=require('./contact')
const login=require('./login')
const register=require('./register')
var router=new Router()

router.use('',mainPage)
router.use('',faq)
router.use('',contact)
router.use('',login)
router.use('',register)

//router.get('//logoRecipeCentralNormal-01.png',index)
//adding a function for every request


//router.get('/Recipes/recipes.html',indexController.getIndexHTML)

module.exports.index=router