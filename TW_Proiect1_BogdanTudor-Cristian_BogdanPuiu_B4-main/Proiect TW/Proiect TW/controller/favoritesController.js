const { exception } = require('console')
const fs = require('fs')



let indexHTML = './Favorites/favorites.html'
let indexCSS = './Favorites/favorites.css'
let img = './Favorites/logoRecipeCentralNormal-01.png'
let background = './Favorites/background-img.png'
let icon = './Favorites/favicon.ico'
let script = './Favorites/favorites.js'
let { secret } = require('../utilities/const')
const jwt = require('jsonwebtoken')
const User = require('../models/user.js')
const Recipe = require('../models/recipe.js')
const { Parser } = require('json2csv')

function getHTML(req, res) {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    fs.readFile(indexHTML, null, function (error, indexHTML) {
      if (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
      }
      else {
        res.end(indexHTML)
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
    fs.readFile(indexCSS, null, function (error, indexCSS) {
      if (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/css')
        res.end('Internal server error')
      }
      else res.end(indexCSS)
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

function getBkTitle(req, res) {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/jpeg')
    fs.readFile(background, null, function (error, background) {
      if (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
      }
      else {
        res.end(background)
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

module.exports = { getHTML, getCSS, getImage, getBkTitle, getIcon, getScript }

module.exports.getFavorites = async (req, res) => {
  var body = ""
  req.on("data", function (data) {
    body += data;
  })
  req.on("end", async function () {
    req.body = body
    req.body = JSON.parse(req.body)
    res.setHeader('Content-type', 'application/json')
    var obj = jwt.verify(req.body, secret)
    let user = await User.findOne({ name: obj.name })
    let aux = await Recipe.find({ name: user.favorites })
    aux.sort((a, b) => a.ingredients.length > b.ingredients.length ? 1 : -1)
    //  console.log(aux)
    if (!aux[0]) {
      res.statusCode = 403
      res.write(JSON.stringify({ success: false, message: 'not a recipe found' }))
      res.end()
    } else {

      res.statusCode = 200
      res.write(JSON.stringify(aux))
      res.end()
    }

  })
}

module.exports.deleteFavorite = async (req, res) => {
  var body = ""
  req.on("data", function (data) {
    body += data;
  })
  req.on("end", async function () {
    req.body = body
    req.body = JSON.parse(req.body)
    res.setHeader('Content-type', 'application/json')
    let auxUser = req.body.user
    let auxRecipe = req.body.recipe
    var obj = jwt.verify(auxUser, secret)
    let user = await User.findOne({ name: obj.name })
    let recipe = await Recipe.findOne({ name: auxRecipe })
    let fav = user.favorites
    recipe.popularity = recipe.popularity - 1
    recipe.save()
    let index = user.favorites.indexOf(recipe.name)
    fav.splice(index, 1)
    console.log(fav)
    user.favorites = fav
    user.save()
    res.end()
    let allRecipes = await Recipe.find({})
    allRecipes.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)
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

    fs.writeFile('./utilities/uploads/file.csv', csv, function (err) {
      //console.log(err)
    })
  })
}