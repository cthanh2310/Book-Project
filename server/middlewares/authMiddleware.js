const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next){
    // access authorization from req header
    const Authorization = req.header('authorization');
    if(!Authorization){
        const err = new Error('Unauthorized!');
        err.statusCode = 401;
        return next(err);
    }
    // Get token
    var token = Authorization.replace('Bearer', '');
    token = token.trim();
    const {userId} = jwt.verify(token, process.env.SECRET_KEY);
    req.user = {userId};
    next();
}

module.exports = {authMiddleware}