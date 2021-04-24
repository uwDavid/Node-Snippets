const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo', {useNewUrlParser:true, useUnifiedTopology: true})
.then( ()=>{
    console.log('Connection open!');
})
.catch( err => {
    console.log('connection error');
    console.log(err);
})

const userSchema = new mongoose.Schema({
    first: String,
    last: String, 
    addresses: [
        {
            street: String,
            city: String,
            state: String,
            country: {
                type: String,
                required: true
            }
        }
    ]
})

const User = mongoose.model('User', userSchema); 

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter',
    })
    u.addresses.push({
        street: '123 Hallows St.',
        city: 'New York',
        state: 'NY',
        country: 'USA',
    })
    const res = await u.save();
    console.log(res);
}

makeUser();

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push({
        street: '99 chamber st.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await user.save();
    console.log(res);
}