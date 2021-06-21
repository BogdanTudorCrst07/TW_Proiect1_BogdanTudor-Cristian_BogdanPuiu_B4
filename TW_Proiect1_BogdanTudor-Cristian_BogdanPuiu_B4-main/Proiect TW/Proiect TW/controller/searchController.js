const { exception } = require('console')
const fs = require('fs')

const { Parser } = require('json2csv')
let searchHTML = './SearchPage/search.html'
let searchCSS = './SearchPage/search.css'
let image = './SearchPage/logoRecipeCentralNormal-01.png'
let bk = './SearchPage/background-img.png'
let script = './SearchPage/search.js'
let icon = './SearchPage/favicon.ico'
const Recipe = require('../models/recipe.js')
const { ourUrl } = require('../utilities/const')
const { port } = require('../utilities/const')
const Ingredient = require('../models/ingredient')
let propose = require('propose')
let { secret } = require('../utilities/const')
const jwt = require('jsonwebtoken')
const formidable = require('formidable')
const path = require('path')
const User = require('../models/user.js')

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

function getPhoto(req, res) {
    try {
        let img = req.params
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        fs.readFile(img, null, function (error, img) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html')
                res.end('Internal server error')
            }
            else {
                res.end(img)
            }
        })
    } catch (e) {
        console.log(e)
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
    }
}


module.exports = { getHTML, getCSS, getImage, getBk, getScript, getIcon, getPhoto }


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
        var container = await Ingredient.find({})
        var dictionary = []
        container.forEach(element => {
            dictionary.push(element.name)
        })
        let ingredients = req.body.ingreds
        console.log(req.body.token)
        ingredients.forEach(function (part, index) {
            if (propose(this[index], dictionary, {
                threshold: 0.5
            }) != undefined) {
                this[index] = propose(this[index], dictionary, {
                    threshold: 0.5
                })
            }
        }, ingredients);
        console.log(ingredients)
        //sorted initially by nr of ingredients
        const token = req.body.token
        if (token != null) {
            var obj = jwt.verify(token, secret)
        }
        var response
        let recipe = await Recipe.find({ ingredients: { $all: ingredients } })

        recipe.sort((a, b) => a.ingredients.length > b.ingredients.length ? 1 : -1)
        if (obj != undefined) {
            if (obj.isAdmin) {
                response = {
                    recipes: recipe,
                    name: obj.name,
                    isLogged: true,
                    isAmin: true
                }
            }
            else {
                response = {
                    recipes: recipe,
                    name: obj.name,
                    isLogged: true,
                    isAmin: false
                }
            }
        }
        else {
            response = {
                recipes: recipe,
                isAmin: false
            }
        }
        console.log(response)
        if (!recipe[0]) {
            res.statusCode = 403
            res.write(JSON.stringify({ success: false, message: 'not a recipe found' }))
            res.end()
        } else {

            res.statusCode = 200
            res.write(JSON.stringify(response))
            res.end()
        }
    })
}

module.exports.deleteItem = async (req, res) => {
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
            res.write(JSON.stringify({ success: false, message: '"value" is required' }))
            res.end()
            return
        }
        console.log("BODY " + req.body)
        const recipe = await Recipe.findOne({ name: req.body })
        if (recipe) {
            console.log(recipe.name)
            Recipe.deleteOne({ name: recipe.name }).then(result => console.log(`Deleted ${result.deletedCount} item.`)).catch(err => console.error(`Delete failed with error: ${err}`))
            res.statusCode = 200
            res.write(JSON.stringify("succes"))
            res.end()
        }
        else {
            console.log('err2')
            res.statusCode = 400
            res.write(JSON.stringify({ success: false, message: '"value" is required' }))
            res.end()
            return
        }

    })
}

module.exports.addPhoto = async (req, res) => {

    const form = new formidable.IncomingForm()
    form.parse(req, async function (err, fields, result) {
        // console.log(err)
        // console.log(fields)

        var oldPath = result.file.path
        console.log(result.file.name)
        let recipe = await Recipe.findOne({ name: fields.name })
        let count = recipe.photos[recipe.photos.length - 1]
        if (count != undefined) {
            let randomValue = count.split('/')
            count = randomValue[3]
            count = count.replace(recipe.name, '')
            count = count.replace(".png", '')
            var integer = parseInt(count, 10)
            integer = integer + 1
        }
        else {
            integer = 0
        }

        let aux = recipe.name + integer.toString() + '.png'
        result.file.name = '/utilities/uploads/' + recipe.name + integer.toString() + '.png'
        let modifiedFile = await Recipe.updateOne({ name: recipe.name }, { $push: { photos: result.file.name } })
        //console.log(modifiedFile)
        var newPath = path.join('./utilities/uploads', aux)
        var rawData = fs.readFileSync(oldPath)
        fs.writeFile(newPath, rawData, function (err) {
            if (err) console.log(err)
            else {
                res.write("Succes")
            }
            return res.end()
        })
    })

}
module.exports.getPhotos = async (req, res) => {
    var body = ""
    req.on("data", function (data) {
        body += data;
    })
    req.on("end", async function () {
        req.body = body
        res.setHeader('Content-type', 'application/json')
        try {
            req.body = JSON.parse(req.body)
            let aux = req.body
            res.statusCode = 200
            res.setHeader('Content-Type', 'image/png')
            let recipes = await Recipe.findOne({ name: aux })
            let photoArray = []
            recipes.photos.forEach(photo => {
                let path = './utilities/uploads/' + photo
                fs.readFile(path, function (error, buffer) {
                    if (error) {
                        res.statusCode = 500
                        console.log("error")
                        // res.setHeader('Content-Type', 'text/html')
                        // res.end('Internal server error')
                    }
                    else {
                        console.log(buffer)
                        res.write(buffer)
                    }
                })
            })
            res.end()
            //res.end(photoArray)
        } catch (e) {
            //console.log(e)
            res.statusCode = 500
            res.setHeader('Content-Type', 'text/html')
            res.end('Internal server error')
        }
    })
}

module.exports.addToFav = async (req, res) => {
    var body = ""
    req.on("data", function (data) {
        body += data;
    })
    req.on("end", async function () {
        req.body = body
        req.body = JSON.parse(req.body)
        res.setHeader('Content-type', 'application/json')
        let recipeAux = req.body.recipe
        let userAux = req.body.user
        console.log(recipeAux + "<= recipe  user=>" + userAux)
        //  Recipe.updateOne({ name: recipe.name }, { $push: { photos: result.file.name } })
        let user = await User.findOne({ name: userAux })
        console.log(user.favorites)
        if (!(user.favorites == undefined)) {

            if (!(user.favorites.includes(recipeAux))) {
                console.log(recipeAux)
                await User.updateOne({ name: user.name }, { $push: { favorites: recipeAux } })
                let recipe = await Recipe.findOne({ name: recipeAux })
                recipe.popularity = recipe.popularity + 1
                recipe.save()
                res.write(JSON.stringify({ success: true }))
                res.end()
                let allRecipes = await Recipe.find({})
                allRecipes.sort((a, b) => (a.popularity > b.popularity) ? 1 : -1)
                let data = []
                const fields = ['ingredients', 'steps', 'photos', '_id', 'name', 'owner', 'time', 'finish', 'difficulty', 'popularity', '__v']
                allRecipes.forEach(recipe => {
                    data.push(new Object({
                        'ingredients': recipe.ingredients,
                        'steps': recipe.steps,
                        'photos': recipe.photos,
                        '_id': recipe.id,
                        'owner': recipe.owner,
                        'time': recipe.time,
                        'finish': recipe.finish,
                        'difficulty': recipe.difficulty,
                        'popularity': recipe.popularity,
                        '__v': recipe.__v
                    }))
                })
                const opts = { fields }
                const parser = new Parser()
                const csv = parser.parse(data)
                // console.log(csv)
                fs.writeFile('./utilities/uploads/file.csv', csv, function (err) {
                    //console.log(err)
                })
            }
            else {
                res.write(JSON.stringify({ success: false }))
                res.end()
            }
        }
        else {
            await User.updateOne({ name: userAux }, { $push: { favorites: recipeAux } })
            let recipe = await Recipe.findOne({ name: recipeAux })
            recipe.popularity = recipe.popularity + 1
            recipe.save()
            res.end()
        }

    })
}

module.exports.removePhoto = async (req, res) => {
    var body = ""
    req.on("data", function (data) {
        body += data;
    })
    req.on("end", async function () {
        req.body = body
        res.setHeader('Content-type', 'application/json')


        req.body = JSON.parse(req.body)
        console.log(req.body)
        const recipe = await Recipe.findOne({ name: req.body.recipeName })
        let photo = '/utilities/uploads/' + req.body.photoRecipe
        let photos = recipe.photos
        let index = recipe.photos.indexOf(photo)
        console.log(index)
        photos.splice(index, 1)
        recipe.photos = photos
        recipe.save()
        res.end()
    })
}

module.exports.searchFilter = async (req, res) => {
    var body = ""
    req.on("data", function (data) {
        body += data;
    })
    req.on("end", async function () {
        req.body = body
        res.setHeader('Content-type', 'application/json')
        var recipes
        req.body = JSON.parse(req.body)
        console.log(req.body.value)
        switch (req.body.filter) {
            case "popularity":
                recipes = await Recipe.find({})
                recipes.sort((a, b) => a.popularity > b.popularity ? 1 : -1)
                break
            case "time":
                recipes = await Recipe.find({ time: req.body.value })
                break
            case "difficulty":
                recipes = await Recipe.find({ difficulty: req.body.value })
                break;
            case "finish":
                recipes = await Recipe.find({ finish: req.body.value })
                break
        }
        console.log(recipes)
        res.end(JSON.stringify(recipes))
    })
}
