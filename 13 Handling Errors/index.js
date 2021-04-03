const express = require('express');
const app = express();
// const path = require('path');
// const pgp = require('pg-promise')(); //Note the options ()
// const methodOverride = require('method-override');
const AppError = require('./AppError');

// Setting Express 
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname,'/views')); 
// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(methodOverride('_method')); 


// Routes
app.get('/error', (req, res)=>{
    unknown.someMethod(); 
}); 

app.get('/custom', (req, res)=>{
    throw new AppError('message from AppError', 401);
})

app.get('/admin', (req, res)=>{
    throw new AppError('not an admin', 403);
})

app.get('*', (req, res)=>{
    res.send("Any other routes here!");
});

// Custome Error Handler
/*
app.use((err, req, res, next)=>{
    console.log("**** Error Occured ****"); 
    // console.log(err); 
    res.status(500).send('Error occurred!');  // Send back http response
})
*/

app.use((err, req, res, next)=>{
    const {status = 500, message = 'default error message'} = err; 
    res.status(status).send(message); 
})


app.listen(8080, ()=> console.log("Listening on PORT:8080..."));