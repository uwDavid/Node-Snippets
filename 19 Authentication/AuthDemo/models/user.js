const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: [true, 'Require username']
    },
    password: {
        type: String, 
        required: [true, 'Require a password']
    }
})

module.exports = mongoose.model('User', userSchema);