# Deletion

When a user deletes his/her account, we want to delete all the data associated with the user.

This example starts with previous Farm example from `13 Handling Errors/Summary`.
We will set up a 2 way relationship and de-normalize the data.

1. We start by incorporating new 'Farm' schema in our 'Models' folder.
2. We create routes and `ejs` views in `views/farms` folder.
3. To add products to a specific farm, our post request wlil go to `/farms/:farm_id/products`. We can also hide the farm_id within the request body.
4. We will set up our `DELETE` route to handle farm delete requests. All the products associated with the farm should be deleted.
   Mogoose provides a middleware to do this.
   `.findByIdAndDelete()` will trigger `.findOneAndDelete()` function as middleware. As a result, we just have to implement a middleware for `findOneAndDelete()`.
   Note that this is a `Query Middleware` rather than a `Document Middleware` - the difference between these two is what keyword this`refers to. Note: Mongoose middleware is entirely different from Express middleware. We have to set up the middleware in the farmSchema. If we want the data from the Delete operation, we will have to use the`.post`middleware because`.pre` middleware runs before our query actually happens.
