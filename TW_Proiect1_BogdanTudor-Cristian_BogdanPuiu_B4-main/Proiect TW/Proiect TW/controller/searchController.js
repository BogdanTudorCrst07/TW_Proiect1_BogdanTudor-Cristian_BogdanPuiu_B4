const { exception } = require('console')
const fs = require('fs')


let searchHTML = './SearchPage/search.html'
let searchCSS='./SearchPage/search.css'
let image='./SearchPage/logoRecipeCentralNormal-01.png'
let bk='./SearchPage/background-img.png'


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



module.exports={getHTML,getCSS,getImage,getBk}