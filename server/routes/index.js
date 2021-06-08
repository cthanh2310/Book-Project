const authRouter = require('./auth.js');

const postRouter = require('./post.js');

function route(app){
    app.use('/api/v1/auth', authRouter);
    app.use('/api/v1/posts', postRouter);
}

module.exports = route;