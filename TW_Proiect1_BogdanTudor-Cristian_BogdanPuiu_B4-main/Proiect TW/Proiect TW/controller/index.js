const { exception } = require('console')
const fs = require('fs')

let indexHTML = './PaginaPrincipala/index.html'
let indexCSS = './PaginaPrincipala/styles.css'
let { logoIndex } = require('../utilities/const')
let { backgroundIndex } = require('../utilities/const')
let { favIco } = require('../utilities/const')
let { descriptionImgIndex } = require('../utilities/const')
let { userIndex1 } = require('../utilities/const')
let { userIndex2 } = require('../utilities/const')
let { userIndex3 } = require('../utilities/const')
let { endBackgroundIndex } = require('../utilities/const')
let { logoForLabelIndex1 } = require('../utilities/const')
let { logoForLabelIndex2 } = require('../utilities/const')
let { logoForLabelIndex3 } = require('../utilities/const')





// ######### HTML PAGE ######
function getIndexHTML(req, res) {
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

// ######### LOGO ########
function getLogoCentral(req, res) {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/png')
    fs.readFile(logoIndex, null, function (error, logoIndex) {
      if (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
      }
      else {
        res.end(logoIndex)
      }
    })
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('Internal server error')
  }
}

// ######## DESCRIPTION IMG #########
function getDescriptionImg(req, res) {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/png')
    fs.readFile(descriptionImgIndex, null, function (error, descriptionImgIndex) {
      if (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
      }
      else {
        res.end(descriptionImgIndex)
      }
    })
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('Internal server error')
  }
}
// ######## USER 1 #####
function getUser1(req, res) {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/png')
    fs.readFile(userIndex1, null, function (error, userIndex1) {
      if (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
      }
      else {
        res.end(userIndex1)
      }
    })
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('Internal server error')
  }
}
//######## USER 2 ###########
function getUser2(req, res) {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/png')
    fs.readFile(userIndex2, null, function (error, userIndex2) {
      if (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
      }
      else {
        res.end(userIndex2)
      }
    })
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('Internal server error')
  }
}
//######## USER 3 ########
function getUser3(req, res) {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/png')
    fs.readFile(userIndex3, null, function (error, userIndex3) {
      if (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
      }
      else {
        res.end(userIndex3)
      }
    })
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('Internal server error')
  }
}
// ######## BACKGROUND IMG ########
function getEndBk(req, res) {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/png')
    fs.readFile(endBackgroundIndex, null, function (error, endBackgroundIndex) {
      if (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
      }
      else {
        res.end(endBackgroundIndex)
      }
    })
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('Internal server error')
  }
}

//######## FRONT PAGE IMG ########
function getFrontPageBk(req, res) {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/png')
    fs.readFile(backgroundIndex, null, function (error, backgroundIndex) {
      if (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
      }
      else {
        res.end(backgroundIndex)
      }
    })
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('Internal server error')
  }
}
// ######## ICON IMG ########
function getFavIcon(req, res) {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/png')
    fs.readFile(favIco, null, function (error, favIco) {
      if (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
      }
      else {
        res.end(favIco)
      }
    })
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('Internal server error')
  }
}

//######## LOGO LABEL ########
function getLogoLabel1(req, res) {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/png')
    fs.readFile(logoForLabelIndex1, null, function (error, logoForLabelIndex1) {
      if (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
      }
      else {
        res.end(logoForLabelIndex1)
      }
    })
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('Internal server error')
  }
}


// ######## LOGO LABEL 2 ########
function getLogoLabel2(req, res) {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/png')
    fs.readFile(logoForLabelIndex2, null, function (error,logoForLabelIndex2 ) {
      if (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/img')
        res.end('Internal server error')
      }
      else {
        res.end(logoForLabelIndex2)
      }
    })
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('Internal server error')
  }
}


// ######## LOGO LABEL 3 ########
function getLogoLabel3(req, res) {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/png')
    fs.readFile(logoForLabelIndex3, null, function (error, logoForLabelIndex3) {
      if (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/img')
        res.end('Internal server error')
      }
      else {
        res.end(logoForLabelIndex3)
      }
    })
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('Internal server error')
  }
}


//######## CSS ########
function getIndexCSS(req, res) {
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


module.exports = { getIndexHTML, getIndexCSS, getLogoCentral, getFrontPageBk, getFavIcon, getDescriptionImg, getUser1, getUser2, getUser3, getEndBk,getLogoLabel1,getLogoLabel2,getLogoLabel3 }