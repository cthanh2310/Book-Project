class homeController{
    home(req, res, next){
        res.send('Hello');
    }
}

module.exports = new homeController();