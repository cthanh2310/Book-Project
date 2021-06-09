const authRouter = require('./auth.js');
const postRouter = require('./post.js');
const {errorHandler} = require('../middlewares/errorHandler');


function route(app){
    app.use('/api/v1/auth', authRouter);
    app.use('/api/v1/posts', postRouter);



    app.all('*', (req, res, next) => {
        const err = new Error('Page Not Found!');
        console.log(err);
        err.statusCode = 404;  // send statusCode and message Error 
        next(err);
    })
    // Handle errors, final handling
    app.use(errorHandler);
}

module.exports = route;