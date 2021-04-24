const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const AppError = require('./AppError');

const Product = require('./Models/product');
const Farm = require('./Models/farm');

mongoose.connect('mongodb://localhost:27017/farmStand2', {useNewUrlParser:true, useUnifiedTopology: true})
.then( ()=>{
    console.log('Connection open!');
})
.catch( err => {
    console.log(err);
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

// Farm routes 
app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', {farms});
});

app.get('/farms/new', (req, res)=> {
    res.render('farms/new');
})

app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', {farm});
});

app.post('/farms', async (req,res) => {
    const farm = new Farm(req.body);
    await farm.save();
    res.redirect('/farms');
})

app.get('/farms/:id/products/new', async (req, res)=> {
    const {id} = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new', {categories, farm});
})

app.post('/farms/:id/products', async (req, res) => {
    const {id} = req.params;
    const farm = await Farm.findById(id);
    const {name, price, category} = req.body;
    const product = new Product({name, price, category});
    farm.products.push(product);
    product.farm=farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${farm._id}`);
});

app.delete('/farms/:id', async (req, res) => {
    const farm = await Farm.findByIdAndDelete(req.params.id);
    res.redirect('/farms');
});

// ******************
// Products Routes
// ******************
app.get('/products', async (req, res)=>{
    const {category} = req.query;
    if(category){
        const products = await Product.find({category: category});
        res.render('products/index', {products, category});
    } else {
        const products = await Product.find({});
        res.render('products/index', {products, category:'All'});
    }
})

app.get('/products/new', (req, res) => {
    // throw new AppError('Not Allowed', 401);
    res.render('products/new', {categories});
})

app.get('/products/:id', async (req, res, next) => {
    const {id} = req.params; 
    // if(!ObjectID.isValid(id)){
    //     return next(new AppError('Invalid ID', 400));
    // }
    const product = await Product.findById(id).populate('farm', 'name');
    // Product.findOne({_id:id});
    if( !product ){
        return next(new AppError('Product not found', 404));
    }
    res.render('products/show', {product});
})

app.get('/products/:id/edit', async (req, res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', {product, categories});
})

// Remember we have to use method-override to change it to PUT request
app.put('/products/:id', async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators:true, new: true});
    res.redirect(`/products/${product._id}`);
})

app.post('/products', async (req, res, next) => {
    // We have to use body-parser to parse the request
    const newProd = new Product(req.body);
    try{
        await newProd.save();
        res.redirect(`/products/${newProd._id}`);
    } catch (e) {
        next(e);
    }
})

app.delete('/products/:id', async(req,res)=>{
    const {id} = req.params;
    const deletedProd = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.use((err, req, res, next) => {
    const {message='something went wrong', status=500} = err; 
    res.status(status).send(message); 
})
app.listen(3000, ()=>{
    console.log("App started on PORT 3000");
})