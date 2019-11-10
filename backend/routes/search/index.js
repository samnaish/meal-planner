const database = require('../../services/database');
const RecipeSchema = require('../../schemas/recipe');

module.exports = async (req, res) => {

    const { term } = req.query;
    if (!term) {
        return res.json({
            error: "Please provide a search term."
        })
    }

    try {
        const connection = await database.connect();
        const Recipe = database.loadModel(connection, 'recipe', RecipeSchema);
        const results = await Recipe.find({
            name: new RegExp(term, 'i')
        }, { name: true });

        return res.json({
            results,
            count: results.length
        })

    } catch (error) {
        console.error('Error in search api', error);
        res.status(500).json({
            error: 'Unexpected error. Please try again later'
        });
    }
  
};