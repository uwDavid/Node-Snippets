const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/authDemo', {useNewUrlParser:true, useUnifiedTopology: true})
.then( ()=>{
    console.log('Connection open!');
})
.catch( err => {
    console.log(err);
})

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({extended:true}));
const sessionOptions = {secret: 'secretevalue', resave: false, saveUninitialized: false}
app.use(session(sessionOptions));

const requireLogin = (req, res, next) => {
    if(!req.session.user_id) {
        return res.redirect('/login');
    }
    next();
}

app.get('/', (req, res)=>{
    res.send('Home Page');
})

app.post('/register', async (req, res)=>{
    const {password, username } = req.body;
    const user = new User({username, password}); //refactor here
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
})

app.get('/register', (req, res)=> {
    res.render('register');
})

app.post('/login', async (req, res)=>{
    const {username, password} = req.body;
    const foundUser = await User.findAndValidate(username, password);  //refactor here
    if(foundUser){
        req.session.user_id=foundUser._id;
        res.redirect('/secret');
    } else {
        res.redirect('/login');
    }
})

app.get('/login', (req, res)=>{
    res.render('login');
})
app.get('/secret', requireLogin, (req, res) => { //refactor here
    res.render('secret');
})

app.post('/logout', async (req, res) => {
    req.session.user_id = null;
    res.redirect('/login');
})

app.listen(3000, ()=> {
    console.log("Server started on 3000");
})