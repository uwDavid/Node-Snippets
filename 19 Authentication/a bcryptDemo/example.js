const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(pw, salt);
    console.log(salt);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if(result){
        console.log('successful login');
    } else {
        console.log('try again');
    }
}
hashPassword('monkey');
// Generated Hash: $2b$12$mlxaGTcwQ8rgtOZGux5SSu3hSpxwJkcnNoCX.DybM8QI7cqGqzCHC
login('monkey', '$2b$12$mlxaGTcwQ8rgtOZGux5SSu3hSpxwJkcnNoCX.DybM8QI7cqGqzCHC');