# Using MongoDB
To use MongoDB in our Express app, we will need a driver `mongoose`. 
This will allow us to 'speak' to the Mongo services using Javascript. 
In addition, it will help us create a schema and map our database models.

Mongoose official docs [here](https://mongoosejs.com/)

Install mongoose: `$ npm install mongoose`

### Using Mongoose
```javascript
const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then( ()=>{
    console.log("Connection open");
})
.catch( err => {
    console.log(err);
}
``` 
Using the `.then()` and `.catch()` is faster error handling than the quickstart suggestions:
```javascript
// This is slower
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection is open!'); 
});
```
### Define a Model 
Now we have to define a schema for our data model. There are 2 steps: 
1. Define the schema
2. Compile the schema into a model

```javascript 
// Define schema
const exampleSchema = new mongoose.Schema({
    title: String, 
    year: Number, 
    qty: {
        type: Number, 
        default: 0, 
        required: true
    } // Look to schema options 
});

// Compile schema
const Example = mongoose.model('Example', exampleSchema); 
```

**Note :** The first argument is a **singular** name of the collection the model is for. 
Mongoose automatically looks for the **plural, lowercased** version of the model name. 
The `const` name that we save this model to should have the same name. 

### Insert a Record
There are many ways to insert a record: `.save()`
```javascript 
// Using .save()
const ex1 = new Example ({title: 'sample1', year: 2021}); 
ex1.save( err => {
    if(err) {
        console.log(err);
    }
}); 

// Using .create()
Tank.create({title:'sample1', year:2021});

// .insertMany() 
Tank.insertMany([
    {title:'sample1', year:2021}, 
    {title:'sample2', year:1989}
]);
```

### Read 
A few methods are available for querying: `.find()`, `.findById()`, `.findOne()`. 
Note queries are not promises! But we can chain on the `.then()`. 
```javascript
Model.find({}).then(
    data => console.log(data);
)
```
The `.exec()` function changes this query to a promise and enable the `await` functionality. 
```javascript
Model.find({}).exec()
```

### Update
We can just call `.save()` on the object again. 
There's also `.updateOne()` and `.updateMany()`. 
```javascript
ex1.save()

// update year from 1986 to 1984
Movie.updateOne({title:'Temrinator'}, {year:1984}).then(res=> console.log(res))
```
Update multiple movies, say this is our Mongo query: 
```mongo
db.movies.find({title: {$in:['Terminator', 'Titanic']}})
```
```javascript
Movie.updateMany({title: {$in:['Terminator', 'Titanic']}, {score: 10}).then(res => console.log(res))
```

In order to return the object that was updated we can use `.findOneAndUpdate()`. But the returned object has the OLD object. 
```javascript
Movie.findOneAndUpdate({title: 'Titanic'}, {score:8.0}).then(data => console.log(data))
```
To get the New object, we can use an option:
```javascript
Movie.findOneAndUpdate({title: 'Titanic'}, {score:8.0}), {new:true}.then(data => console.log(data))
```

**Note: ** To stop deprecation warnings use this: 
```javascript
mongoose.set('useFindAndModify', false); 
```

### Delete
```mongo
Movie.remove({title: 'Terminator'}).then(msg => console.log(msg))

Movie.deleteMany({year: {$gte:1999}}).then(msg => console.log(msg))
```

To return the movie that was deleted
```mongo
Movie.findOneAndDelete({title:'Alien'}).then(m=>console.log(m))
```

