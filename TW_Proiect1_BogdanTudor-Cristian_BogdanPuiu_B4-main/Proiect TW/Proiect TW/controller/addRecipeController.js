const { exception } = require('console')
const fs = require('fs')
const Ingredient = require('../models/ingredient')
const User = require('../models/user')

let addRecipeHTML = './AddRecipePage/addR.html'
let addRecipeCSS = './AddRecipePage/addR.css'
let bk = './AddRecipePage/background-img.png'
let logo = './AddRecipePage/logoRecipeCentralNormal-01.png'
let script = './AddRecipePage/addR.js'
const Recipe = require('../models/recipe')
const { isAuth } = require('../routes/isAuth')
var propose=require('propose')

function getHTML(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        fs.readFile(addRecipeHTML, null, function (error, addRecipeHTML) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html')
                res.end('Internal server error')
            }
            else {
                res.end(addRecipeHTML)
            }
        })
    } catch (e) {
        console.log(e)
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
    }
}
function getCSS(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/css')
        fs.readFile(addRecipeCSS, null, function (error, addRecipeCSS) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/css')
                res.end('Internal server error')
            }
            else res.end(addRecipeCSS)
        })
    } catch (e) {
        console.log(e)
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/css')
        res.end('Internal server error')
    }
}

function getBk(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        fs.readFile(bk, null, function (error, bk) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html')
                res.end('Internal server error')
            }
            else {
                res.end(bk)
            }
        })
    } catch (e) {
        console.log(e)
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
    }
}


function getLogo(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        fs.readFile(logo, null, function (error, logo) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html')
                res.end('Internal server error')
            }
            else {
                res.end(logo)
            }
        })
    } catch (e) {
        console.log(e)
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
    }
}

function getScript(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/javascript')
        fs.readFile(script, null, function (error, script) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html')
                res.end('Internal server error')
            }
            else {
                res.end(script)
            }
        })
    } catch (e) {
        console.log(e)
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
    }
}

module.exports = { getHTML, getCSS, getBk, getLogo, getScript }

module.exports.addRecipe = async (req, res) => {
    var body = ""
    req.on("data", function (data) {
        body += data;
    })
    req.on("end", async function () {
        req.body = body
        res.setHeader('Content-type', 'application/json')
        console.log(req.body)
        req.body = JSON.parse(req.body)
        if (!req.body.name) {
            console.log('err1')
            res.statusCode = 400
            res.write(JSON.stringify({ success: false, message: '"name" is required' }))
            res.end()
            return
        }
        if (!req.body.owner) {
            console.log('err2')
            res.statusCode = 400
            res.write(JSON.stringify({ success: false, message: '"owner" is required' }))
            res.end()
            return
        }
        if (!req.body.ingredients) {
            console.log('err3')
            res.statusCode = 400
            res.write(JSON.stringify({ success: false, message: '"ingredients" is required' }))
            res.end()
            return
        }
        if (!req.body.time) {
            console.log('err4')
            res.statusCode = 400
            res.write(JSON.stringify({ success: false, message: '"description" is required' }))
            res.end()
            return
        }
        if (!req.body.finish) {
            console.log('err5')
            res.statusCode = 400
            res.write(JSON.stringify({ success: false, message: '"description" is required' }))
            res.end()
            return
        }
        if (!req.body.difficulty) {
            console.log('err6')
            res.statusCode = 400
            res.write(JSON.stringify({ success: false, message: '"description" is required' }))
            res.end()
            return
        }
        if (!req.body.steps) {
            console.log('err7')
            res.statusCode = 400
            res.write(JSON.stringify({ success: false, message: '"description" is required' }))
            res.end()
            return
        }
        if (!req.body.nrSteps) {
            console.log('err8')
            res.statusCode = 400
            res.write(JSON.stringify({ success: false, message: '"description" is required' }))
            res.end()
            return
        }
        const recipe = await Recipe.findOne({ name: req.body.name })
        if (recipe) {

            res.statusCode = 403
            res.write(JSON.stringify({ success: false, message: 'name is already being used' }))
            res.end()
        } else {
            var container = await Ingredient.find({})
            var dictionary = []
            container.forEach(element => {
                dictionary.push(element.name)
            })
            req.body.ingredients.forEach(function(part,index){
                if(propose(this[index],dictionary,{
                    threshold: 0.5
                })!=undefined){
                this[index]=propose(this[index],dictionary,{
                    threshold: 0.5
                })
            }
            },req.body.ingredients);
            const recipe_ = new Recipe({
                name: req.body.name,
                owner: req.body.owner,
                ingredients: req.body.ingredients,
                time: req.body.time,
                finish: req.body.finish,
                difficulty: req.body.difficulty,
                steps: req.body.steps,
                popularity: 0
            })
            console.log(recipe_)
            req.body.ingredients.forEach(async (ingredient) => {
                console.log(ingredient)
                const aux = await Ingredient.findOne({ name: ingredient })
                if (aux) {


                
                }
                else {
                    console.log("Igredientul este : " + ingredient)
                    let ingredient_ = new Ingredient({
                        name: ingredient
                    })
                    ingredient_.save((err) => {
                        if (err) {
                            console.log(err)
                            res.statusCode = 500
                            res.write(JSON.stringify({ success: false, message: 'Internal server error' }))

                        }
                        else {
                            res.statusCode = 200
                            res.write(JSON.stringify({ success: true, message: 'ingredient created' }))

                        }
                    })
                }
            })
            recipe_.save((err) => {
                if (err) {
                    console.log(err)
                    res.statusCode = 500
                    res.write(JSON.stringify({ success: false, message: 'Internal server error' }))
                    res.end()
                } else {
                    res.statusCode = 200
                    res.write(JSON.stringify({ success: true, message: 'recipe created' }))
                    res.end()
                }
            })
        }
    })
}
