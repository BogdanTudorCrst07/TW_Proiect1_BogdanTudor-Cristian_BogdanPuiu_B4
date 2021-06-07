const { model } = require("mongoose")

const User = model('User', {
    name: String,
    password:String
})

module.exports=User