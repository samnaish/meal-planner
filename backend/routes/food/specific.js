const database = require('../../services/database');
const RecipeSchema = require('../../schemas/recipe');
const UserSchema = require('../../schemas/user');

module.exports = async (req, res) => {
    const { id } = req.query;
    try {
        const connection = await database.connect();
        database.loadModel(connection, 'User', UserSchema);
        const Recipe = database.loadModel(connection, 'recipe', RecipeSchema);
        const dish = await Recipe.findOne({ _id: id }).populate('author', { first_name: 1, last_name: 1 });

        if (!dish) {
            return res.status(404).json({
                error: "Dish not found."
            });
        }

        return res.json({
            dish
        });
    } catch (error) {
        console.error('Error in Specific API', error);
        return res.status(500).json({
            error: "Unable to retrieve recipe. Please try again later."
        });
    }

}
