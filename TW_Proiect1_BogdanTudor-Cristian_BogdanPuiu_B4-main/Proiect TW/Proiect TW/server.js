let http = require('http')
const mongoose = require('mongoose')
const {userModel}=require("./models")
const url = "mongodb+srv://admin:admin@cluster0.lzkrj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
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

const router = new Router()
router.use('', index)
console.log(router)

const app = new WTFood(constants.port, router)
app.listen()
console.log()

