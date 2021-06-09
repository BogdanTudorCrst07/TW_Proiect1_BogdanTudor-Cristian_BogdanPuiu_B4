const jwt = require('jsonwebtoken')
const {secret}=require('../utilities/const')

module.exports.isAuth=(req,res)=>{
    try{
    const token=req.headers.authorization.split('Bearer ')[1]
    var aux=jwt.verify(token,secret)
    req.user=aux
    }
    catch (e) {
        console.log(e)
        res.writeHead(401, 'aplication/json')
        res.write(JSON.stringify({ result: false, message: 'Auth is required' }))
        res.end()
      }
}