# 13 Handling Errors

Express has a default error handling, for more details check the [error handling section](https://expressjs.com/en/guide/error-handling.html).

We can trigger Express's default error handling by:

```javascript
app.get("/error", (req, res) => {
  unknown.someMethod();
});
```

Or, we can throw a custom error by doing:

```javascript
app.get("/custom", (req, res) => {
  throw new Error("Error message");
});
```

## Error Basics

Error handler signature requires `(err, req, res, next)`, this is a custom error handler:

```javascript
app.use((err, req, res, next) => {
  console.log("**** Error Occured ****");
  console.log(err);
  res.status(500).send("Error occurred!"); // Send back http response
});
```

Now if we go to the `/error` route, we can see this message printed to console.
From here, if we call `next()` it will call the next middleware.
To call another error handler, we need to pass in the error to `next()` like so `next(err)`.

```javascript
app.use((err, req, res, next) => {
  console.log("**** Error Occured ****");
  res.status(500).send("Error occurred!"); // Send back http response
  next(); // Calls the next middleware
  next(err); // If we pass in the error into next(), it will be calling the error handler
});
```

## Defining Custom Error Handler

When an error occurs we want to:

1. Respond with an error code
2. Respond with an error message
   But right now, our app does not have any status codes attached to the errors.
   We can make a custom error handler that takes the `status code` and `error message`.

```javascript
class AppError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}
```

We can then use this custom error handler by including this in our `index.js`:

```javascript
app.get("/admin", (req, res) => {
  throw new AppError("not an admin", 403);
});
```

Now when we go to the `/admin` route, our middleware will catch this error:

```javascript
app.use((err, req, res, next) => {
  // destructure the error and set default values
  const { status = 500, message = "default error message" } = err;
  res.status(status).send(message);
});
```

**Note: ** This has to be included near the end of the `index.js` file.

## Handling Async Errors

We will copy our previous project from our `11 MongoDB CRUD/Summary` folder, and put our error handler towards the bottom of `index.js`.
This way to handle error does not work, because the function is asynchronous.

```javascript
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  // Product.findOne({_id:id});
  if (!product) {
    throw new AppError("Product not found", 404);
  }
  res.render("products/show", { product });
});
```

For asynchronous functions, we need to pass our `error` into the `next()` function like so:

```javascript
app.get("/products/:id", async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  // Product.findOne({_id:id});
  if (!product) {
    next(throw new AppError("Product not found", 404));
  }
  res.render("products/show", { product });
});
```

We can also use a try-catch pattern:

```javascript
app.get("/products/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    // Product.findOne({_id:id});
    if (!product) {
      next(throw new AppError("Product not found", 404));
    }
    res.render("products/show", { product });
  } catch (e) {
    next(e);
  }
});
```

## Wrapping the try-catch

We can also define a function to do this try-catch to save copy-pasting:

```javascript
function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((e) => next(e));
  };
}
app.get(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);
      // Product.findOne({_id:id});
      if (!product) {
        next(throw new AppError("Product not found", 404));
      }
      res.render("products/show", { product });
    } catch (e) {
      next(e);
    }
  })
);
```

Basically, we enclose our `(req,res,next)` function in an automatic `.catch()` function.

## Mongoose Errors

Every Mongoose has a name to help us differentiate between the errors.
We can try using a middleware to log our error names:

```javascript
app.use((err, req, res, next) => {
  console.log(err.name);
  next(err);
});
```

Then we can have a custom handler for each error:

```javascript
const handleValidationError = (err) => {
  console.dir(err);
  return new AppError(`Validation error message .. ${err.message}`, 400);
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") err = handleValidationError(err);
  next(err);
});
```

To provide a custom message, we create an error message in our schema:

```javascript
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name cannot be blank"],
  },
});
```
