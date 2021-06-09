let http = require('http')
const mongoose = require('mongoose')

const { db_url } = require('./utilities/const')

mongoose.connect(db_url)


const constants = require('./utilities/const')

const { WTFood } = require('./utilities/WTFood')

const { Router } = require('./utilities/Router')
const { index } = require('./routes/index')
const { faq } = require('./routes/faq')
const router = new Router()
router.use('', index)
console.log(router)

const app = new WTFood(constants.port, router)
app.listen()
console.log()

