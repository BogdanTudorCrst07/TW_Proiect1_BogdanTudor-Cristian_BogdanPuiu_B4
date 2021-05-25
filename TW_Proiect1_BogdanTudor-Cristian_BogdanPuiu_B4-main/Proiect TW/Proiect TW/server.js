let http= require('http')

const {port}=require('./utilities/const')
const {WTFood}=require('./utilities/WTFood')
//const {db} = require('../utilities/const')

const {index}=require('./routes/index')

const router=new Router()
router.use('',index)
console.log(router)

const app=new WTFood(constants.port,router)
app.listen()




// server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
