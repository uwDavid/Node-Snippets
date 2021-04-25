# Authentication Demo

This shows the basic workflows for authenticating a user. The app contains the following components:

1. A register page to register new users.
2. A login page to authenticate users.
3. A secret page that can only be viewed by authenticated users.
4. A logout page to take away the authentication from user.

## Auth Workflow

#### Register

To register a new user we will need to:

1. Set up mongoose schema for the user, so we can store it in MongoDB.
2. We call `bcrypt.hash()` to hash the user's password
3. We will store username and the hashed password in our database.

#### Login

The login process requires the user to enter username and password, then:

1. Server retrieves the username and password-hash from database.
2. We call `bcrypt.compare()` to compare the password-hash to authenticate the user.

#### Session

When we use `express-session`, it automatically generates a **signed cookie** to the browser and will automatically check that the cookie has not been tampered with.

If the user successfully logged in, we can store the user id in the session: `req.session.userid = user._id`.
Then to view protected pages, we check the session to see if there is a valide `req.session.userid` field.

#### Logout

To logout we can just remove the `req.session.userid` from the session, by calling `req.session.userid=null`.
Or we can destroy the session entirely by calling `req.session.destroy()`.
