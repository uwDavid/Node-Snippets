const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo', {useNewUrlParser:true, useUnifiedTopology: true})
.then( ()=>{
    console.log('Connection open!');
})
.catch( err => {
    console.log('connection error');
    console.log(err);
})

const productSchema = new mongoose.Schema({
    name: String, 
    price: Number,
    season: {
        type: String,
        enum: ['spring', 'summer', 'fall', 'winter']
    }
});

const Product = mongoose.model('Product', productSchema); 

// Product.insertMany([
//     {name: 'Goddess Melon', price: 4.99, season: 'summer'},
//     {name: 'Sugar Baby Watermelon', price: 8.99, season: 'summer'},
//     {name: 'Great Asperus', price: 3.99, season: 'spring'},
// ]);
const {Schema} = mongoose;
const farmSchema = new Schema({
    name: String,
    city: String, 
    products: [{type: Schema.Types.ObjectID, ref: 'Product'}]
})

const Farm = mongoose.model('Farm', farmSchema);
const makeFarm = async () =>{
    const farm = new Farm({name:'SpringTime Farm', city:'LA, California'});
    const melon = await Product.findOne({name: 'Goddess Melon'});
    farm.products.push(melon);
    await farm.save();
    console.log(farm);
} 

// makeFarm();

const addProduct = async() =>{
    const farm = await Farm.findOne({name:'SpringTime Farm'});
    const watermelon = await Product.findOne({name:'Sugar Baby Watermelon'});
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
}

// addProduct();

Farm.findOne({name:'SpringTime Farm'}).then(farm => console.log(farm));
Farm.findOne({name:'SpringTime Farm'}).populate('products').then(farm => console.log(farm));