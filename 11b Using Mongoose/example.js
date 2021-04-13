const mongoose = require ('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then( ()=>{
    console.log("Connection open");
})
.catch( err => {
    console.log("can't connect to mongo");
    console.log(err);
}); 


// Define Simple Schema 
// Operation buffering allow us to use this schema even before db is connected
const movieSchema = new mongoose.Schema({
    title: String, 
    year: Number, 
    score: Number, 
    rating: String
})
const Movie = mongoose.model('Movie', movieSchema); 
const titanic = new Movie({
    title: 'titanic', 
    year: 1997, 
    score: 9.2, 
    rating: 'excellent'
})
titanic.save().then(res => console.log(res))
.catch(err => console.log(err))
/*
// More Schema options
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true
    }, 
    price: {
        type: Number
    }, 
    qty: {
        online: {
            type: Number, 
            default: 0
        }, 
        instore: {
            type: Number, 
            default: 0
        }
    }
})
const Product = mongoose.model('Product', productSchema); 

const bike = new Product({name: 'Bike', price: '599', quality: 8}); 
// price just need to something that can be turned into a number 
// it will ignore qty
bike.save() // save to data base
.then(data => {
    console.log("It worked"); 
    console.log(data); 
})
.catch( err => {
    console.log(err)
}); 
*/