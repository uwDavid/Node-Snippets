# 11c Mongoose Schema Validation
When can have addtional Schema options like so: 
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
    }
})
const Product = mongoose.model('Product', productSchema); 
``` 

However, when we update this record, the schema is not checked on default. 
As a result we have to use the option `runValidators` to `true`. 
```javascript
Movie.findOneAndUpdate({title: 'titanic'}, {title: 'Teen Titans', score:8.0}, {new: true, runValidators: true})
.then( data => console.log(data))
.catch( err => console.log(err))
```

## Using `enum` to validate 
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
const Product = mongoose.model('Product', productSchema); 
```