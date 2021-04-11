const mongoose = require ('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then( ()=>{
    console.log("Connection open");
})
.catch( err => {
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

// More Schema options
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true
    }, 
    qty: Number,
    Price: {
        type: Number
    }
})
const Product = mongoose.model('Product', productSchema); 



mongoose.disconnect();
