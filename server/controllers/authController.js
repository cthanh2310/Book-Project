const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class authController {
    async login(req, res, next) {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            const err = new Error('Email is incorrect!');
            err.statusCode = 400;
            return next(err);
        }
        if (bcrypt.compareSync(req.body.password, user.password)) {
            console.log('2' + process.env.SECRET_KEY);
            const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
            res.status(200).json({
                status: 'success',
                data: {
                    token: token,
                    userName: user.name
                }
            })
        } else {
            const err = new Error('Password is incorrect!');
            err.statusCode = 400;
            return next(err);
        }
    }
    async register(req, res, next) {
        try {
            const user = await User.create(req.body);
            const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
            res.status(200).json({
                status: 'success',
                data: { token, userName: user.name }
            })

        } catch (error) {
            next(error);
        }

    }

}

module.exports = new authController();