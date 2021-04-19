# Instance Methods
Method that is available for a particular instance of a Collection. 

```javascript
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true
    }, 
    price: {
        type: Number,
        min: 0
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
    }, 
    size: {
        type: String, 
        enum: ['S', 'M', 'L']
    }
})

productSchema.methods.greet = function (){
    console.log("Hello there"); 
    console.log(`product name is: ${this.name}`);
}
const Product = mongoose.model('Product', productSchema); 

const p = new Product({
    name: 'popcorn', 
    price: 10.99, 
    qty: 1, 
    size: 'M'
})

p.greet();
```
So now we can do this: 
```javascript
const findProd = async() => {
    const found = await Product.findOne({name: 'popcorn'}); 
    found.greet();
}
```

Or another useful instance method: 
```javascript
productSchema.methods.toggleOnSale = function (){
    this.onSale = !this.onSale;
    return this.save(); // DON'T FORGET TO SAVE!!
}

productSchema.methods.addCategory = function(newCat) {
    this.categories.push(newCat);
    return this.save();
}
```
`.save()` is an asynchronous method. 
We can return the result of this method so that we can use `await`. 

```javascript
const findProd = async() => {
    const found = await Product.findOne({name: 'popcorn'}); 
    found.greet();
}

```

Note: This is useful in password authentication where we can create a validation method to check that the user's input meet our password criteria. 

