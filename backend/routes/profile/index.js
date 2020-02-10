const { promisify } = require('util');
const jwt = require('jsonwebtoken');

const database = require('../../services/database');
const userSchema = require('../../schemas/user');

const verify = promisify(jwt.verify);

module.exports = async (req, res) => {
    const sessionToken = req.headers['x-sessiontoken'];

    if (!sessionToken) {
        return res.status(400).json({
            error: 'Please login.'
        });
    }
    let decoded = null;
    try {
        decoded = await verify(sessionToken, process.env.JWT_SECRET);
    } catch (error) {
        return res.status(400).json({
            error: 'Token invalid.'
        });
    }

    try {
        const connection  = await database.connect();
        const User = database.loadModel(connection, 'user', userSchema);
        const profile = await User.findOne({
            _id: decoded.user._id 
        }, { password: false, __v: false });
        
        return res.json({
            profile
        });

    } catch(error) {
        console.error('error', error)
        return res.status(500).json({
            error: "unable to retrieve profile."
        });
    }
}