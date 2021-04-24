# 15 Express Router

Why do we need `Express Router`?
It will help modulize our website into smaller packages.

We use express router by requiring the specific routes.js file.
Then specify the prefix we what to attached to those specific routes by calling:

```javascript
const exampleRoute = require("./routes/example");
app.use("/prefix", exampleRoute);
```

## Applying Middleware

We saw previously that we use middleware by calling `app.use()`, this will apply the middleware to all of the requests.
If we want a middleware to run only for a subset of routes we can add `router.use()` to our router file.

See `dogs.js` for example.
