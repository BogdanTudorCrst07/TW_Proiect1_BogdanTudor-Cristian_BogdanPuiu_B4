const { exception } = require('console')
const fs = require('fs')


let searchHTML = './SearchPage/search.html'
let searchCSS = './SearchPage/search.css'
let image = './SearchPage/logoRecipeCentralNormal-01.png'
let bk = './SearchPage/background-img.png'
let script = './SearchPage/search.js'
let icon = './SearchPage/favicon.ico'
const Recipe = require('../models/recipe.js')
const { ourUrl } = require('../utilities/const')
const { port } = require('../utilities/const')
var propose=require('propose')
const Ingredient=require('../models/ingredient')


function getHTML(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        fs.readFile(searchHTML, null, function (error, searchHTML) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html')
                res.end('Internal server error')
            }
            else {
                res.end(searchHTML)
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
        fs.readFile(searchCSS, null, function (error, searchCSS) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/css')
                res.end('Internal server error')
            }
            else res.end(searchCSS)
        })
    } catch (e) {
        console.log(e)
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/css')
        res.end('Internal server error')
    }
}


function getImage(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        fs.readFile(image, null, function (error, image) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html')
                res.end('Internal server error')
            }
            else {
                res.end(image)
            }
        })
    } catch (e) {
        console.log(e)
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
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

function getScript(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/javascipt')
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


function getIcon(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        fs.readFile(icon, null, function (error, icon) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html')
                res.end('Internal server error')
            }
            else {
                res.end(icon)
            }
        })
    } catch (e) {
        console.log(e)
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
    }
}


module.exports = { getHTML, getCSS, getImage, getBk, getScript, getIcon }


module.exports.filterRecipes = async (req, res) => {
    var body = ""
    req.on("data", function (data) {
        body += data;
    })
    req.on("end", async function () {
        req.body = body
        res.setHeader('Content-type', 'application/json')

        req.body = JSON.parse(req.body)
        if (!req.body) {
            console.log('err1')
            res.statusCode = 400
            res.write(JSON.stringify({ success: false, message: '"name" is required' }))
            res.end()
            return
        }
        var container=await Ingredient.find({})
        var dictionary=[]
        container.forEach(element=>{
            dictionary.push(element.name)
        })
        let ingredients = req.body
        ingredients.forEach(function(part,index){
            this[index]=propose(this[index],dictionary)
        },ingredients);
        console.log(ingredients)
        let recipe = await Recipe.find({ ingredients: { $all: ingredients } })
        console.log(recipe)
        recipe.sort((a,b)=> a.ingredients.length>b.ingredients.length? 1: -1)
        if (!recipe[0]) {
            res.statusCode = 403
            res.write(JSON.stringify({ success: false, message: 'not a recipe found' }))
            res.end()
        } else {
            
            res.statusCode = 200
            res.write(JSON.stringify({ success: true, recipe }))
            res.end()
        }
    })
}