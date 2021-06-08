const { model } = require("mongoose")

const Ingredient=model('Ingredient',{
    name:String
})

module.exports=Ingredient