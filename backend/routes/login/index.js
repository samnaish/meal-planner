const { promisify } = require('util');
const jwt = require('jsonwebtoken');

const database = require('../../services/database');
const UserSchema = require('../../schemas/user');

const signToken = promisify(jwt.sign);

module.exports = async (req, res) => {
    const { email, password } = req.body;

    try {
        const connection = await database.connect();
        const User = database.loadModel(connection, 'user', UserSchema);
        const foundUser = await User.findOne({
            email,
            password
        });
        if (foundUser) {
            const token = await signToken({
                user: {
                    email: foundUser.email,
                    first_name: foundUser.first_name
                }
            }, process.env.JWT_SECRET, { expiresIn: 30 * 60 });

            return res.json({
                result: "Success",
                token
            });
        }

        return res.status(400).json({
            result: "Failure"
        });

    } catch (error) {
        console.log('================');
        console.log('error', error);
        console.log('================');
        
        return res.status(500).json({
            error: 'Unexpected error. Please try again later'
        });
    }

}