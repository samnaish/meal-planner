
const database = require('../../services/database');
const userSchema = require('../../schemas/user');

module.exports = async (req, res) => {
    const { id } = req.query;

    try {
        const connection = await database.connect();
        const User = database.loadModel(connection, 'user', userSchema);

        const foundUser = await User.findOne({
            _id: id 
        }, { posts: true });

        if (!foundUser) {
            return res.status(404).json({
                error: 'user not found'
            });
        }

        return res.json({
            posts: foundUser.posts
        });

    } catch (error) {
        console.log('============');
        console.log('error', error);
        console.log('============');
        
        res.status(500).json({
            error: "unexpected error"
        });
    }
}