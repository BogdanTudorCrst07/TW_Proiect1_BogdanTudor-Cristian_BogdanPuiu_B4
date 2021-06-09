let http = require('http')
const mongoose = require('mongoose')
const { userModel } = require("./models")
const { db_url } = require('./utilities/const')
const {ingredientModel}=require('./models')
const { recipeModel } = require('./models')
mongoose.connect(db_url).then(async res => {
    const allRecipes = await recipeModel.find({})
    const allIngredients=await ingredientModel.find({})
    //console.log(allRecipes)
    console.log(allIngredients)


})

// mongoose.connect(url).then(async res => {

//     console.log("connected")
//   const allUsers=await  userModel.find({})
//   const newUser=await userModel.create({
//       name: "test123",
//       email: "admin",
//       password: "admin"
//   })
//   console.log(allUsers)
//   console.log(newUser)
// }).catch(err => console.log(err.message))
const constants = require('./utilities/const')

const { WTFood } = require('./utilities/WTFood')
//const {db} = require('../utilities/const')
const { Router } = require('./utilities/Router')
const { index } = require('./routes/index')
const { faq } = require('./routes/faq')
const router = new Router()
router.use('', index)
console.log(router)

const app = new WTFood(constants.port, router)
app.listen()
console.log()

