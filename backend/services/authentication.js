const bcrypt = require('bcryptjs');

module.exports = {
    hashPassword: (password) => {
        return bcrypt.hash(password, 8);
    },
    compareHash: (password, hash) => {
        return bcrypt.compare(password, hash);
    }
}