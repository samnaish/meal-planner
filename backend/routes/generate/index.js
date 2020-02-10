const database = require('../../services/database');
const RecipeSchema = require('../../schemas/recipe');

const DEFAULT_DAYS = 4;

module.exports = async (req, res) => {

    // Three cases
        // User doesnt specify a value
        // User does but as its a query param its a string - sample needs an integer
        // User does provide a value, but its invalid - ie not a number

    const { days } = req.query;
    const numDays = parseInt(days, 10);

    try {
        const connection  = await database.connect();
        const Recipe = database.loadModel(connection, 'recipe', RecipeSchema);
        const results = await Recipe.aggregate([
            { $sample: { size: isNaN(numDays) ? DEFAULT_DAYS : numDays } },
            { $project: { name: 1, image: 1 } }
        ]);

        return res.json({
            results
        })
    
    } catch (error) {
        console.error('Error in generate API', error);
        res.status(500).json({
            error: 'Unexpected error, Please try again later.'
        })
    }
    
}