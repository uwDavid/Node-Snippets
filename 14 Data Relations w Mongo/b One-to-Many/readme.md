## One-To-Many

We now store one-to-many data in a separate document, and store that information as a reference. Visit [Mongoose Populate doc](https://mongoosejs.com/docs/populate.html) for more info. Our documents will be stored like this:

```json
{
  "farmName": "Animal Farm",
  "location": "yellow stone, oregon",
  "produce": [
    ObjectID("23534543001"),
    ObjectID("34324542432"),
    ObjectID("12412454253")
  ]
}
```

## Relationships / Mongoose Populate

```javascript
const farmSchema = new mongoose.Schema({
  name: String,
  city: String,
  products: [{ type: mongoose.Schema.Types.ObjectID }],
});
```

Or we can refactor to:

```javascript
const Schema = mongoose.Schema;
// or
const { Schema } = mongoose;

const farmSchema = new Schema({
  name: String,
  city: String,
  products: [{ type: Schema.Types.ObjectID, ref: "Product" }],
});
```

`ref:` is telling mongoose which schemas the ID's represent.

## Populating References

When we query for the farm, its products will only be a list of ObjectID's.
To see a full description of those ID's, we use the `.populate()` function.

```javascript
Farm.findOne({ name: "SpringTime Farm" }).then((farm) => console.log(farm));
Farm.findOne({ name: "SpringTime Farm" })
  .populate("products")
  .then((farm) => console.log(farm));
```
