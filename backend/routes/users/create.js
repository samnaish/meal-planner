const database = require('../../services/database');
const userSchema = require('../../schemas/user');

module.exports = async (req, res) => {
    try {
        const connection = await database.connect();
        const User = database.loadModel(connection, 'users', userSchema);
        const potentialUser = new User(req.body);

        try {
            await potentialUser.validate();
        } catch (error) {
            const failures = Object.keys(error.errors).reduce((acc, key) => {
                acc[key] = error.errors[key].message;
                return acc;
            }, {});
            return res.status(400).json({
                error: 'failed - Not Valid',
                failures
            })
        }

        const foundUser = await User.findOne({ email: req.body.email });
        if (foundUser) {
            return res.status(409).json({
                error: 'email already taken.'
            })
        }

        const insertedUser = await potentialUser.save();

        return res.json({
            user: insertedUser
        })

    } catch (error) {
        console.log('error', error);
        
        return res.status(500).json({
            error: 'Unexpected error, Please try again later.'
        })
    }

}