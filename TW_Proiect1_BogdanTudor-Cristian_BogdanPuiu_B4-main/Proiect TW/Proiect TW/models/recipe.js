const { model } = require("mongoose")
var { Schema } = require("mongoose")
const Recipe = model('Recipe', {
    name: String,
    owner: String,
    ingredients: [String],
    desciption: String
})
module.exports = Recipe