# 18 - Flash Message

We use flash messages to notify the user of an event, one time.
When the user refreshes the site, the message should not persist.

We will use the `connect-flash` package along with `express-session`.
After we require the package and `app.use()` it, all of the requests will have a method called `req.flash()` that can be used to flash messages.

We will add a flash message for when we create a new farm.

```javascript
app.post("/farms", async (req, res) => {
  const farm = new Farm(req.body);
  await farm.save();
  req.flash("sucess", "Successfully added a new farm!");
  res.redirect("/farms");
});
```

We can then see the flash message in our redirected route.

```javascript
app.get("/farms", async (req, res) => {
  const farms = await Farm.find({});
  res.render("farms/index", { farms, messages: req.flash("success") });
});
```

We also need to add the element in our HTML template to be able to see the message:

```html
<body>
  <%= messages %>
</body>
```

## Refactoring using res.locals

We set up a middleware to pass the res.locals.messages.This way we do not have to pass `messages: req.flash()` to every route.

```javascript
app.use((req, res, next) => {
  res.locals.messages = req.flash("success");
  next();
});

app.get("/farms", async (req, res) => {
  const farms = await Farm.find({});
  res.render("farms/index", { farms });
});
```
