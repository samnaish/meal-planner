const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const verify = promisify(jwt.verify);

const database = require('../../services/database');
const userSchema = require('../../schemas/user');

module.exports = async () => {
    const { id } = req.query;

    try {

        const connection = await database.connect();
        const User = await database.loadModel(connection, 'users', userSchema);
        const foundUser = await User.findOne({
            _id: id 
        }, { posts: true });

        if (!foundUser) {
            return res.status(404).json({
                error: 'user can not found'
            });
        }

    

        
    } catch (error) {
        console.log('============');
        console.log('error', error);
        console.log('============');
        res.status(500).json({
            error: 'unexpected error'
        })
    }
}