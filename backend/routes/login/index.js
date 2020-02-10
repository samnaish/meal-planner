const { promisify } = require('util');
const jwt = require('jsonwebtoken');

const database = require('../../services/database');
const authentication = require('../../services/authentication');
const UserSchema = require('../../schemas/user');

const signToken = promisify(jwt.sign);

module.exports = async (req, res) => {
    const { email, password, rememberMe } = req.body;

    try {
        const connection = await database.connect();
        const User = database.loadModel(connection, 'user', UserSchema);
        
        const foundUser = await User.findOne({
            email
        });
        if (!foundUser) {
            return res.status(400).json({
                error: 'User not found.'
            });
        }

        const passwordMatch = await authentication.compareHash(password, foundUser.password);
        if (!passwordMatch) {
            return res.status(400).json({
                error: 'User not found.'
            });
        }

        const token = await signToken({
            user: {
                _id: foundUser._id,
                email: foundUser.email,
                first_name: foundUser.first_name
            }
        }, process.env.JWT_SECRET, { expiresIn: rememberMe ? 60 * 60 * 24 * 30 : 30 * 60 });
        
        return res.json({
            token
        });

    } catch (error) {
        console.error('error', error);
        return res.status(500).json({
            error: 'Unexpected error. Please try again later'
        });
    }

}