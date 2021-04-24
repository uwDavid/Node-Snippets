const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelter');
const dogRoutes = require('./routes/dogs');

app.use('/', shelterRoutes);
app.use('/dogs', dogRoutes);

app.listen(3000, ()=>{
    console.log('Listening on 3000');
})