const mongoose = require('mongoose');
const Product = require('./Models/product');

mongoose.connect('mongod://localhost:27017/farmStand', {useNewURLParser:true, useUnifiedTopology: true})
.then( ()=>{
    console.log('Connection open!');
})
.catch( err => {
    console.log(err);
})

const p = new Product({
    name: 'Grapefruit',
    price: 1.99,
    category: 'fruit'
})
p.save().then(p=>{
    console.log(p);
}).catch( err =>{
    console.log(err);
})