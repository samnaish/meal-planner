const database = require('../../services/database');
const authentication = require('../../services/authentication');
const userSchema = require('../../schemas/user');

module.exports = async (req, res) => {
    try {
        const connection = await database.connect();
        const User = database.loadModel(connection, 'user', userSchema);

        const userObject = new User(req.body);
        
        try {
            await userObject.validate();
        } catch (error) {
            return res.status(400).json({
                error: 'Validation failed',
                failed: Object.keys(error.errors)
            });
        }

        const foundUser = await User.findOne({ email: req.body.email });
        if (foundUser) {
            return res.status(409).json({
                error: 'Email already used.'
            });
        }
        userObject.password = await authentication.hashPassword(req.body.password);
        const insertedUser = await userObject.save();

        return res.json({
            success: true
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Unexpected error. Please try again later."
        })
    }
}