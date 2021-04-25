const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

userSchema.statics.findAndValidate = async function (username, password) {
    const user = await this.findOne({username});
    if(!user){
        return false;
    }
    const isValid = await bcrypt.compare(password, user.password);
    return isValid ? user : false;
}

userSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password, 12); 
    next(); 
})

module.exports = mongoose.model('User', userSchema);