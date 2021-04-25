# 17 - Sessions

We send a session key in cookie to the browser.
Then we can look up the session on server-side to achieve persistent state for the client.

We start with `express-session`

```javascript
const express = require("express");
const session = require("express-session");
const app = express();

const sessionOptions = {
  secret: "secretevalue",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));
```

But this stores the session to memory by default.
