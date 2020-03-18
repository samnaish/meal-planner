const { promisify } = require('util');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const verify = promisify(jwt.verify);

module.exports = {
    decodeToken: async (token) => {
        try {
            return await verify(token, process.env.JWT_SECRET);
        } catch (error) {
            console.log('============');
            console.log('token error', error);
            console.log('============');
            return null;
        }
    },
    hashPassword: (password) => {
        return bcrypt.hash(password, 8);
    },
    compareHash: (password, hash) => {
        return bcrypt.compare(password, hash);
    }
}


// api handler -> req / res
    // get things from req and call things on res
    // can get token from req, and pass it to verifyToken
