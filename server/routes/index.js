const authRouter = require('./auth.js');


function route(app){
    app.use('/api/v1/auth', authRouter);
}

module.exports = route;