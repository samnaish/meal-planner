const database = require('../../services/database');
const RecipeSchema = require('../../schemas/recipe');

module.exports = async (req, res) => {

    try {
        const connection = await database.connect();
        const Recipe = database.loadModel(connection, 'recipe', RecipeSchema);
        const results = await Recipe.find({});

        return res.json({
            data: results,
            count: results.length
        });

    } catch (error) {
        console.error('Error in ', error);
        res.status(500).json({
            error: 'Unexpected error. Please try again later'
        });
    }

};
