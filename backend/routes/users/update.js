const database = require('../../services/database');
const userSchema = require('../../schemas/user');
// Connects to database - done
// loads database model - done
    // Does the user ID match the query parsed in? - done
        //If not, respond with 404. - done
    //Is the parsed data valid.
        //If not, respond with 400 (json error response).
    // try to update user record

    //If any more errors - return 500 status json response

module.exports = async (req, res) => {
    try { 
        const query = { _id: req.query.id };
        const connection = await database.connect();
        const User = database.loadModel(connection, 'users', userSchema);
        const foundUser = await User.findOne(query);

        if (!foundUser) {
            return res.status(404).json({
                error: 'User not found'
            });
        }

        try {
            await new User(req.body).validate();
        } catch (error) {
            return res.status(400).json({
                error: 'Not valid User'
            });
        }

        const updatedUser = await User.findOneAndUpdate(query, { $set: req.body }, { new: true });

        return res.json({
            result: updatedUser
        });

    } catch (error) {
        console.log('error:', error);
        return res.status(500).json({
            error: 'Unexpected error, Please try again later.'
        })
    }
    
}