# Authentication Middleware

We will make a middleware that help us check authentication for protected routes.
We basically convert our authentication check to our `/secret` route to a middleware:

```javascript
const requireLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/login"); // return here is important
  }
  next();
};

app.get("/secret", requireLogin, (req, res) => {
  res.render("secret");
});
```

We can now user our `requireLogin` function for all of our protected routes.

## Other Improvements: Refactoring Login

We want to have our route handlers as minimalistic as possible.
So we will define a static method for our Login function.

```javascript
userSchema.statics.findAndValidate = async function (username, password) {
  const user = await this.findOne({ username });
  if (!user) {
    return false;
  }
  const isValid = await bcrypt.compare(password, user.password);
  return isValid ? user : false;
};
```

## Other Improvements: Refactoring Register

We will also define a mongoose middleware `pre` saving the password. We will use this middlware to hash the input password.

```javascript
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
```
