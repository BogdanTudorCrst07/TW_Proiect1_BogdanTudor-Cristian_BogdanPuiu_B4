const { secret } = require('../utils/constants')
const jwt = require('jsonwebtoken')

module.exports.isAuth = (req, res, next) => {
    
        try {
          const token = req.headers.authorization.split('Bearer ')[1]
          var obj = jwt.verify(token, secret)
  
          delete obj.password
          req.user = obj
          next[0](req, res, next.slice(1))
        } catch (e) {
          console.log(e)
          res.writeHead(401, 'aplication/json')
          res.write(JSON.stringify({ result: false, message: 'Auth is required' }))
          res.end()
        }
  }