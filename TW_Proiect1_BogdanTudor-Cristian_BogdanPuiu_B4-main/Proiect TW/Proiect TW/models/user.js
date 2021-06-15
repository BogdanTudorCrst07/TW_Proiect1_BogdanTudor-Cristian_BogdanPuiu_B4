const { model } = require("mongoose")

const User = model('User', {
    name: String,
    password:String,
    isAdmin: Boolean
})

module.exports=User