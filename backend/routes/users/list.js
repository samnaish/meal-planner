const database = require('../../services/database');
const userSchema = require('../../schemas/user');

module.exports = async (req, res) => {
    try {
        const connection = await database.connect();
        const User = database.loadModel(connection, 'User', userSchema);
        const foundResults = await User.find({}, { password: false });

        return res.json({
            results: foundResults
        });

    } catch (error) {
        return res.status(500).json({
            error: 'Unexpected error. Please try again later.'
        });
    }
}
