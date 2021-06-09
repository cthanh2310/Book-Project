const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next){
    // access authorization from req header
    const Authorization = req.header('authorization');
    console.log(Authorization);
    if(!Authorization){

    }
    // Get token
    var token = Authorization.replace('Bearer', '');
    console.log(token);
    token = token.trim();
    const {userId} = jwt.verify(token, process.env.SECRET_KEY);
    req.user = {userId};
    console.log(req.user);
    next();
}

module.exports = {authMiddleware}