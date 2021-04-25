# 19 - Authentication

Never store passwords as is in database.

Instead we hash the password and store the hash instead.
When the user logs in, we hash the password the user entered and compare that the hash stored on the data base.

## Hash Functions

Properties of hash functions:

1. One-way function that is infeasible to invert
2. Small change in input yields large change in the ouput
3. Deterministic - same input will yield same output
4. Unlikely to find a collision - 2 different inputs with the same output

Altough there are fast hash algorithms, password hashing is deliberately slow to prevent brute force attacks.

## Salt

Salting a password is to append random values to a password. It helps ensure unique hashes and common attacks.

See `bcrypt` example for more details.

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
