# Bcrypt

Bcrypt is a library that will help us salt passwords.
`bcryptjs` is built entirely on javascript while `bcrypt` built on top of C++ and will not work in the browser.
We will use `bcrypt`.

## Generate Salt

`bcrypt.genSalt()` generates a salt

- saltRounds = lower number is faster hashing, recommended number is 12.
- the salt generated each time is different

`bcrypt.hash()` generates a hash

## Compare Passwords

**Note: ** We do not have to store the salt separately with bcrypt.
To compare the password against the hash in our database, we can use `bcrypt.compare()`.
Bcrypt automatically knows what the salt is because it has a fixed length.
