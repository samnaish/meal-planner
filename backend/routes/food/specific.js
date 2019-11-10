const database = require('../../services/database');
const RecipeSchema = require('../../schemas/recipe');

module.exports = async (req, res) => {
    const { id } = req.query;
    try {
        const connection = await database.connect();
        const Recipe = database.loadModel(connection, 'recipe', RecipeSchema);
        const dish = await Recipe.findOne({ _id: id });

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