class authController{
    login(req, res, next){
        res.json('Login success')
    }
    register(req, res, next){
        res.json('Register success');
    }
}

module.exports = new authController();