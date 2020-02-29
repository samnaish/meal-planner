const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const verify = promisify(jwt.verify);

const database = require('../../services/database');
const userSchema = require('../../schemas/user');

module.exports = async (req, res) => {
    const { id } = req.query;
    const sessionToken = req.headers['x-sessiontoken'];
    let session = null;

    if (!sessionToken) {
        return res.status(400).json({
            error: 'Please login.'
        });
    }
    
    try {
        session = await verify(sessionToken, process.env.JWT_SECRET);
    } catch (error) {
        return res.status(400).json({
            error: 'Token invalid.'
        });
    }

    try {
        const userFilter = {
            _id: session.user._id
        };
        const connection = await database.connect();
        const User = database.loadModel(connection, 'users', userSchema);
        const foundUser = await User.findOne(userFilter, { posts: true });       

        if (!foundUser) {
            return res.status(404).json({
                error: 'user can not found'
            });
        }

        const newPosts = (foundUser.posts || []).filter((post) => {           
            return post._id.toString() !== id;
        });
       
        const updatedUser = await User.findOneAndUpdate(userFilter, { $set: { posts: newPosts } }, { new: true });

        return res.json({
            posts: updatedUser.posts
        });

    } catch (error) {
        console.log('============');
        console.log('error', error);
        console.log('============');
        res.status(500).json({
            error: 'unexpected error'
        })
    }
}