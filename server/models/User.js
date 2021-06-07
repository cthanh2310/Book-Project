const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
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

const User = mongoose.model('User', userSchema);

module.exports = User;