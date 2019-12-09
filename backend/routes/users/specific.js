const database = require('../../services/database');
const userSchema = require('../../schemas/user');

module.exports = async (req, res) => {
    const { id } = req.query;
    try {
        const connection  = await database.connect();
        const User = database.loadModel(connection, 'user', userSchema)
        const account = await User.findOne({ _id: id });

        if (!account) {
            return res.status(404).json({
                error: "User not found."
            });
        }

        return res.json({
            account
        });

    } catch (error) {
        return res.status(500).json({
            error: "unable to retrieve user. please try again later."
        })
    }
}