const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Username must be required']
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: [true, 'Email must be required']
    },
    password: {
        type: String,
        required: [true, 'Password must be required'],
        minlength: [6, 'Password must be at least 6 characters']
    }

}, {
    timestamps: true,
})

userSchema.pre('save', async function (next) {
    let user = this;
    bcrypt.hash(user.password, 10, (error, hashedPassword) =>{
        if(error){
            return next(error); 
        } else {
            user.password = hashedPassword;
            console.log(user.password);
            next();
        }
    })
})

const User = mongoose.model('User', userSchema);


module.exports = User;