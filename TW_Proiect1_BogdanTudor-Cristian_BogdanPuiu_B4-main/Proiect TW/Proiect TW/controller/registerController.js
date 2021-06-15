const { exception } = require('console')
const fs = require('fs')

const bcrypt = require('bcrypt')
const User = require('../models/user')

let registerHTML = './Register/register.html'
let registerCSS = './Register/register.css'
let { contactLogo } = require('../utilities/const')
let bk = './Register/background-img.png'
let icon = './Register/favicon.ico'
let script = './Register/register.js'

function getRegisterHTML(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        fs.readFile(registerHTML, null, function (error, registerHTML) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html')
                res.end('Internal server error')
            }
            else {
                res.end(registerHTML)
            }
        })
    } catch (e) {
        console.log(e)
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
    }
}

function getRegisterCSS(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/css')
        fs.readFile(registerCSS, null, function (error, registerCSS) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/css')
                res.end('Internal server error')
            }
            else res.end(registerCSS)
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

function getScritp(req, res) {
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

module.exports = { getRegisterHTML, getRegisterCSS, getImage, getBk, getIcon, getScritp }

module.exports.register = async (req, res) => {
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
        if (!req.body.password) {
            console.log('err2')
            res.statusCode = 400
            res.write(JSON.stringify({ success: false, message: '"password" is required' }))
            res.end()
            return
        }

        const user = await User.findOne({ name: req.body.name })
        if (user) {
            res.statusCode = 403
            res.write(JSON.stringify({ success: false, message: 'name is already being used' }))
            res.end()
        } else {
            const user_ = new User({
                name: req.body.name,
                password: bcrypt.hashSync(req.body.password, 5),
                isAdmin: false
            })

            console.log(user_)
            user_.save((err) => {
                if (err) {
                    console.log(err)
                    res.statusCode = 500
                    res.write(JSON.stringify({ success: false, message: 'Internal server error' }))
                    res.end()
                } else {
                    res.statusCode = 200
                    res.write(JSON.stringify({ success: true, message: 'user created' }))
                    res.end()
                }
            })
        }
    })
}