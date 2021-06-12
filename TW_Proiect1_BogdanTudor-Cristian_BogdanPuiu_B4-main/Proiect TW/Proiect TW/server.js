
const mongoose = require('mongoose')

const { db_url } = require('./utilities/const')

mongoose.connect(db_url)



const constants = require('./utilities/const')

const { WTFood } = require('./utilities/WTFood')

const { Router } = require('./utilities/Router')
const { index } = require('./routes/index')
const Ingredient = require('./models/ingredient')
const router = new Router()
router.use('', index)
console.log(router)

const app = new WTFood(constants.port, router)
app.listen()


