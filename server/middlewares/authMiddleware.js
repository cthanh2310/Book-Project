const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next){
    // access authorization from req header
    const Authorization = req.header('authorization');
    if(!Authorization){

    }
    // Get token
    const token = Authorization.replace('Bearer', '');
    token = token.trim();
    const {userId} = jwt.verify(token, process.env.APP_SECRET);
    req.user = {userId};
    next();
}

module.exports = {authMiddleware}