const { exception } = require('console')
const fs = require('fs')



let indexHTML = './Favorites/favorites.html'
let indexCSS = './Favorites/favorites.css'
let img = './Favorites/logoRecipeCentralNormal-01.png'
let background = './Favorites/background-img.jpg'
let icon = './Favorites/favicon.ico'
let script='./Favorites/favorites.js'

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

module.exports = { getHTML, getCSS, getImage, getBkTitle, getIcon,getScript }