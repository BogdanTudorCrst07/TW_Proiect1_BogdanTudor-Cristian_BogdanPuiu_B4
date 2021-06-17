const { model } = require("mongoose")

const User = model('User', {
    name: String,
    password:String,
    isAdmin: Boolean,
    favorites:[String]
})

module.exports=User