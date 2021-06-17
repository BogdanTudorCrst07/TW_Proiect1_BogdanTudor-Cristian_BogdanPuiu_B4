const { model } = require("mongoose")
var { Schema } = require("mongoose")
const Recipe = model('Recipe', {
    name: String,
    owner: String,
    ingredients: [String],
    time: Number,
    finish: Number,
    difficulty: Number,
    steps: [String],
    nrSteps: Number,
    photos: [String]
})
module.exports = Recipe