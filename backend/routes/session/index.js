const { promisify } = require('util');
const jwt = require('jsonwebtoken');

const verify = promisify(jwt.verify);

module.exports = async (req, res) => {

    try {
        const { user } = await verify(req.query.token, process.env.JWT_SECRET);
        res.json({
            user
        });
    } catch (error) {
        console.log('================');
        console.log('error', error);
        console.log('================');
        
        res.status(400).json({
            error: 'Invalid token'
        });
    }

}