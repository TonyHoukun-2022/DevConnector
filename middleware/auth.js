const jwt = require('jsonwebtoken')
const config = require('config')

//exports a middleware func
module.exports = (req, res, next) => {
    //get token from header x-auth-token key
    const token = req.header('x-auth-token')
    //check if no token
    if (!token) {
        return res.status(401).json({msg: 'No token, authorization denied'})
    }
    //verify token => jwt.io
    try {

        const decoded = jwt.verify(token, config.get('jwtSecret'))
        //assign payload defined by jwt.sign in routes/users from returned jwt to req.user
        req.user = decoded.user
        next()

    } catch (err) {
        res.status(401).json({msg: 'token is not valid'})
    }
}