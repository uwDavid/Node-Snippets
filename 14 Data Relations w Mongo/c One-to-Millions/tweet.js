const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo', {useNewUrlParser:true, useUnifiedTopology: true})
.then( ()=>{
    console.log('Connection open!');
})
.catch( err => {
    console.log('connection error');
    console.log(err);
})

const userSchema = new mongoose.Schema({
    userName: String, 
    age: Number
})

const tweetSchema = new mongoose.Schema({
    text: String, 
    likes: Number, 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweets = async () => {
    const u = new User({userName: 'ninja', age: 34});
    const tweet1 = new Tweet({text: 'hello world', likes: 0});
    tweet1.user = u;
    u.save();
    tweet1.save();
    const tweet2 = new Tweet({text: 'super reflex!', likes: 4});
    tweet2.user = u; 
    tweet2.save();
}

// makeTweets();

const findTweet = async () => {
    const t = await (await Tweet.findOne({}).populate('user'));
    const y = await (await Tweet.findOne({}).populate('user', 'userName'));
    console.log(t);
    console.log(y);
}
findTweet();
