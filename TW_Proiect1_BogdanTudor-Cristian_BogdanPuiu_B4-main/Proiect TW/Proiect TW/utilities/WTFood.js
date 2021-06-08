const http=require('http')
const {port} = require('../utilities/const')
const mongoose=require('mongoose')
const {db_url}=require('../utilities/const')
// const {db_link}=require('../utilities/const')
//const mongoose=require('mongoose')

class WTFood{
    constructor(port,router){
        this.port=port
        this.router=router
    }

    use(){

    }

    async listen(){

        await mongoose.connect(db_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
          })
        var app=this
         var server=http.createServer(function(req,res){
             app.router.route(req,res)
         })
         server.listen(port)
         console.log(`wtf is running on: ${port}}`)
    }

}
    module.exports={WTFood}