const { promisify } = require('util');
const jwt = require('jsonwebtoken');

const verify = promisify(jwt.verify);

const database = require('../../services/database');
const userSchema = require('../../schemas/user');

module.exports = async (req, res) => {
    const sessionToken = req.headers['x-sessiontoken'];
    const { post } = req.body;
    console.log('============');
    console.log('hello this is my user post');
    console.log('============');
    
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

        const connection = await database.connect();
        const User = database.loadModel(connection, 'users', userSchema);
        const foundUser = await User.findOne({
            _id: decoded.user._id            
        });

        if (!foundUser) {
            return res.status(404).json({
                error: 'no user ID found.'
            });
        }
        
        console.log('============');
        console.log('foundUser.posts', foundUser.posts);
        console.log('============');
        
        const userPosts = [post, ...(foundUser.posts || [])];

        console.log('============');
        console.log('userPosts', userPosts);
        console.log('============');
        

        const {posts} = await User.findOneAndUpdate({ _id: decoded.user._id }, { $set: { posts: userPosts } }, { new: true });

        return res.status(200).json({
            posts
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