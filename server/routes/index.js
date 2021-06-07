const homeController = require('../controllers/homeController');

function route(app){
    app.use('/', homeController.home)
}

module.exports = route;