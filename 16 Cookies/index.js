const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('secretvalue'));

app.get('/greet', (req, res)=>{
    const {name = 'default name'} = req.cookies;
    res.send(`Hi ${name}`);
})

app.get('/setname', (req,res)=>{
    res.cookie('name', 'Simon');
    res.cookie('cookie2', 'any value here');
    res.send('sent cookie');
})

app.get('/signedcookie', (req, res) => {
    res.cookie('signedFruit', 'grap', {signed:true});
    res.send('Sent signedFruit cookie');
})

app.get('/verifycookie', (req, res) => {
    res.send(req.signedCookies);
})

app.listen(3000, ()=>{
    console.log('started at 3000');
})