const { exception } = require('console')
const fs = require('fs')

let indexHTML = './Contact/contactindex.html'
let indexCSS = './Contact/contactstyle.css'
let { twitterIcon } = require('../utilities/const')
let { contactBk } = require('../utilities/const')
let { contactLogo } = require('../utilities/const')
let { instagramIcon } = require('../utilities/const')
let { phoneIcon } = require('../utilities/const')
let facebookIcon = './Contact/facebook-icon-01.png'
let emailIcon = './Contact/email-icon-01.png'
let adressIcon = './Contact/adress-icon-01.png'
let linkedIcon = './Contact/linkedin-icon-01.png'
let icon = './Contact/favicon.ico'

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

function getTwitter(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        fs.readFile(twitterIcon, null, function (error, twitterIcon) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html')
                res.end('Internal server error')
            }
            else {
                res.end(twitterIcon)
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
        fs.readFile(contactBk, null, function (error, contactBk) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html')
                res.end('Internal server error')
            }
            else {
                res.end(contactBk)
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

function getInsta(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        fs.readFile(instagramIcon, null, function (error, instagramIcon) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html')
                res.end('Internal server error')
            }
            else {
                res.end(instagramIcon)
            }
        })
    } catch (e) {
        console.log(e)
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
    }
}
function getPhone(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        fs.readFile(phoneIcon, null, function (error, phoneIcon) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html')
                res.end('Internal server error')
            }
            else {
                res.end(phoneIcon)
            }
        })
    } catch (e) {
        console.log(e)
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
    }
}

function getFacebook(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        fs.readFile(facebookIcon, null, function (error, facebookIcon) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html')
                res.end('Internal server error')
            }
            else {
                res.end(facebookIcon)
            }
        })
    } catch (e) {
        console.log(e)
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
    }
}
function getEmail(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        fs.readFile(emailIcon, null, function (error, emailIcon) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html')
                res.end('Internal server error')
            }
            else {
                res.end(emailIcon)
            }
        })
    } catch (e) {
        console.log(e)
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
    }
}

function getAdress(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        fs.readFile(adressIcon, null, function (error, adressIcon) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html')
                res.end('Internal server error')
            }
            else {
                res.end(adressIcon)
            }
        })
    } catch (e) {
        console.log(e)
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end('Internal server error')
    }
}

function getLinked(req, res) {
    try {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        fs.readFile(linkedIcon, null, function (error, linkedIcon) {
            if (error) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html')
                res.end('Internal server error')
            }
            else {
                res.end(linkedIcon)
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


module.exports = { getIndexHTML, getIndexCSS, getTwitter, getBk, getLogo, getInsta, getPhone, getFacebook, getEmail, getAdress, getLinked, getIcon }
