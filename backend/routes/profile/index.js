const database = require('../../services/database');
const authentication = require('../../services/authentication');
const userSchema = require('../../schemas/user');

module.exports = async (req, res) => {
    const sessionToken = req.headers['x-sessiontoken'];

    try {
        const session = await authentication.decodeToken(sessionToken);

        if (!session) {
            return res.status(400).json({
                error: 'Please authenticate.'
            });
        }

        const connection = await database.connect();
        const User = database.loadModel(connection, 'user', userSchema);
        const profile = await User.findOne({
            _id: session.user._id
        }, { password: false, __v: false });

        return res.json({
            profile
        });

    } catch (error) {
        console.error('error', error)
        return res.status(500).json({
            error: "unable to retrieve profile."
        });
    }
}
