# 16 - Cookies

Cookies are just tiny hashes that stores in a client's browser.
The browser will then attached the cookie on all of its subsequent requests to the website.

It's used to remember some state/information about the client and add state.
We can set cookies by using Express's `req.cookie()`.

```javascript
app.get("/setname", (req, res) => {
  res.cookie("name", "cookie value");
  res.cookie("cookie2", "anything we want");
  res.send("sent cookie");
});
```

## Parsing Cookies

To read the cookie value, we will use the `cookie-parser` middleware.

```javascript
const cookieParser = require("cookie-parser");
app.use(cookieParser);

app.get("/greet", (req, res) => {
  const { name = "default name" } = req.cookies;
  res.send(`Hi ${name}`);
});
```

## Signing Cookies

The idea of signing cookies is to store encrypted values to client's browser.
When the browser send the cookie back we can parse it and check for tempering.
To do this, we set a secret to our cookie-parser:

```javascript
app.use(cookieParser("secretvalue"));

app.get("/signedcookie", (req, res) => {
  res.cookie("signedFruit", "grap", { signed: true });
  res.send("Sent signedFruit cookie");
});
```

The value of the cookie isn't very cryptic. But the idea to to ensure that the value of the cookie isn't tempered.
We can then access the values of this cookie by using `req.signedCookies`.
