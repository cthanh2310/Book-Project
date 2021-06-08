const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class authController {
    async login(req, res, next) {
        let user = await User.findOne({ email: req.body.email });
        console.log(req.body.email);
        console.log(user);
        if (!user) {
        }
        if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET);
            res.status(200).json({
                status: 'success',
                data: {
                    token: token,
                    userName: user.name
                }
            })
        } else {

        }
    }
    async register(req, res, next) {
        try {
            const user = await User.create(req.body);
            const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET);
            res.status(200).json({
                status: 'success',
                data: { token, userName: user.name }
            })

        } catch (error) {
            res.json(error);
        }

    }

}

module.exports = new authController();