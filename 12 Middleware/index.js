const express = require('express');
const path = require('path');
const app = express();
// const pgp = require('pg-promise')(); //Note the options ()
// const methodOverride = require('method-override');

// Setting Express 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views')); 
// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(methodOverride('_method')); 

// Middleware example
app.use((req, res, next)=>{
    console.log("First middleware");
    next();
})

app.use((req, res, next)=>{
    console.log("Second middleware");
    next();
})

app.use('/middle',(req, res, next)=>{
    console.log("Route specific middleware...");
    next();
})

const verifyPassword = (req, res, next)=>{
    const {password} = req.query; 
    if(password==='topSecret'){
        next();
    }
    res.send('Wrong password!'); 
}

app.get('/', (req, res)=>{
    res.send("Homepage!");
});

app.get('/secret', verifyPassword, (req, res)=>{
    res.send('Gained access to secret page!'); 
}); 

app.get('*', (req, res)=>{
    res.send("Any other routes here!");
});

app.listen(8080, ()=> console.log("Listening on PORT:8080..."));