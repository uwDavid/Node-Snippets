const mongoose = require('mongoose');
const Product = require('./Models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser:true, useUnifiedTopology: true})
.then( ()=>{
    console.log('Connection open!');
})
.catch( err => {
    console.log(err);
})

// const p = new Product({
//     name: 'Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save().then(p=>{
//     console.log(p);
// }).catch( err =>{
//     console.log(err);
// })

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 10,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Seedless Watermelon',
        price: 8,
        category: 'fruit'
    },
    {
        name: 'Magic Celery',
        price: 2.11,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Milk',
        price: 1.99,
        category: 'dairy'
    }
]
Product.insertMany(seedProducts)
    .then( d => {
        console.log(d);
    })
    .catch( err => {
        console.log(err);
    })
// Note: if any validation fails, then none of the items will get inserted.
