const { exception } = require('console')
const fs = require('fs')
const bcrypt = require('bcrypt')
let loginHTML = './Login/login.html'
let loginCSS = './Login/login.css'
let { contactLogo } = require('../utilities/const')
let bk = './Login/background-img.png'
let icon = './Login/favicon.ico'
let script = "./Login/login.js"
const User = require("../models/user")
const jwt = require('jsonwebtoken')
const constants = require('../utilities/const')
const cookie = require("cookie")

function getLoginHTML(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        fs.readFile(loginHTML, null, function (error, loginHTML) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html')
                res.end('Internal server error')
            }
            else {
                res.end(loginHTML)
            }
        })
    } catch (e) {
        console.log(e)
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
    }
}

function getLoginCSS(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/css')
        fs.readFile(loginCSS, null, function (error, loginCSS) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/css')
                res.end('Internal server error')
            }
            else res.end(loginCSS)
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
        fs.readFile(contactLogo, null, function (error, contactLogo) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html')
                res.end('Internal server error')
            }
            else {
                res.end(contactLogo)
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

module.exports = { getLoginHTML, getLoginCSS, getImage, getBk, getIcon, getScript }

module.exports.login = async (req, res) => {
    var body = ""
    req.on("data", function (data) {
        body += data;
    })
    req.on("end", async function () {
        req.body = body
        res.setHeader('Content-type', 'application/json')
      //  console.log(req.body)

        req.body = JSON.parse(req.body)
        if (!req.body.name) {
            console.log('err1')
            res.statusCode = 400
            res.write(JSON.stringify({ success: false, message: '"name" is required' }))
            res.end()
            return
        }
        if (!req.body.password) {
            console.log('err2')
            res.statusCode = 400
            res.write(JSON.stringify({ success: false, message: '"password" is required' }))
            res.end()
            return
        }

        const user = await User.findOne({ name: req.body.name })
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                const token = await jwt.sign(req.body, constants.secret)
                
                res.write(JSON.stringify(token))
                res.end()
            }
            else {
                res.statusCode = 403
                res.write(JSON.stringify({ success: false, message: 'invalid password' }))
                res.end()
            }
        } else {
            res.statusCode = 403
            res.write(JSON.stringify({ success: false, message: 'invalid entry' }))
            res.end()
        }
    })
}