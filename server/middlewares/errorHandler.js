exports.errorHandler = function(err, req, res, next){
    err.statusCode = err.statusCode || 500; // default 500

    if(err.code === 11000){      // handle error register
        for(let i in err.keyValue){
            err.statusCode = 400;
            err.message = `${i} already exists!`;
        }
    }
    // handle error when update || delete one post (hacker change userID)
    if(err.kind === 'ObjectId'){
        res.statusCode = 401;
        err.message = `No have user with ID: ${err.value}`;
    }
    
    //handle error : when user intentionally let vacancy (username, email, password ...)
    if(err.errors){
        err.message = [];
        for(let e in err.errors){
            err.message.push(err.errors[e].message);
        }
    }


    res.status(err.statusCode).json({
        status: 'fail',
        message: err.message
    })
}