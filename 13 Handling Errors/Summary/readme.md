# Summary for MongoCRUD

Here are some common mistakes:

1. The order of the routes is important in `index.js`.

```javascript
app.get("/products/new", (req, res) => {
  res.render("products/new");
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  // Product.findOne({_id:id});
  res.render("products/show", { product });
});
```

Here, `/products/new` must be placed before `/products/:id` route.
If we did it the other way around, we will get an error because there's no id = 'new'.

2. We can't do a PUT request from HTML.
   To accomplish this, we have to use the middleware `method-override` to change a `POST` request to a `PUT` request.

3. Mongoose update methods such as `findOneAndUpdate()` do not validate data automatically.
   To do so, we can pass in the option `{runValidators:true}`.

4. To automatically select a modal, we can use EJS conditional logic to add `selected` to the correct category. By using this in our EJS template:

```html
    <form action="/products/<%=product._id%>?_method=PUT" method="POST">
        <select name="category" id="category">
            <option value="fruit" <%=product.category==='fruit'? 'selected' : ''%>>fruit</option>
            <option value="vegetable"<%=product.category==='vegetable'? 'selected' : ''%>>vegetable</option>
            <option value="dairy"<%=product.category==='dairy'? 'selected' : ''%>>dairy</option>
        </select>
        <button>Submit</button>
    </form>
```

But we can improve upon this further by putting it all together by passing all possible categories in for-loop.

5. Choosing between `/categories/:category` and `/products?category=dairy`
   The latter works better in our example because this is similar to saying we want to perform a query/filter function on all products.
   Whereas the former escalates `categories` to be a object.
