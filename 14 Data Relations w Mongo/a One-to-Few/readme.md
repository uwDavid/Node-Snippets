## One-to-Few

This example stores a few addresses to one user's document.

Notice the output of the console log shows that the addresses are treated as separate documents by Mongoose.

```
{
  _id: 6081c00055433213a1510340,
  first: 'Harry',
  last: 'Potter',
  addresses: [
    {
      _id: 6081c00055433213a1510341,
      street: '123 Hallows St.',
      city: 'New York',
      state: 'NY',
      country: 'USA'
    }
  ],
  __v: 0
}
```

To turn off the id:

```javascript
const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresses: [
    {
      _id: { id: false },
      street: String,
      city: String,
      state: String,
      country: {
        type: String,
        required: true,
      },
    },
  ],
});
```
