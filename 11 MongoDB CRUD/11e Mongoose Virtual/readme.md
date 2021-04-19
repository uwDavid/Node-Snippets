# 11f Mongoose Virtual
```javascript
const personSchema = new mongoose.Schema({
    first: String, 
    last: String
})

personSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.last}`
}) 

const Person = mongoose.model('Person', personSchema);
```
This will allow us to use a `.fullName` property. 

```javascript 
const tammy = new Person({first:'Tammy', last:'Ivy'})
tammy.save()
```

## Set Virtual
We can also set properties using this virtual full name. 
See mongoose tutorial for details.
