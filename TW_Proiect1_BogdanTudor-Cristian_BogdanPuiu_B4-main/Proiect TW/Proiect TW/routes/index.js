const {Router} =require('../utilities/Router')
const faq=require('./faq')
const mainPage=require('./mainPage')
const contact=require('./contact')
const login=require('./login')
const register=require('./register')
var router=new Router()
const search=require('./search')
const addRecipe=require('./addRecipe')
const favorites=require('./favorites')

router.use('',mainPage)
router.use('',faq)
router.use('',contact)
router.use('',login)
router.use('',register)
router.use('',search)
router.use('',addRecipe)
router.use('',favorites)


module.exports.index=router