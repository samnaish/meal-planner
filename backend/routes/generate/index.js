const database = require('../../services/database');
const RecipeSchema = require('../../schemas/recipe');

const DEFAULT_DAYS = 4;

module.exports = async (req, res) => {

    const { days, ignore = '' } = req.query;
    const numDays = parseInt(days, 10);

    const ignoreArray = ignore
        .split(',')
        .filter(id => id.length > 0)
        .map(id => database.toObjectId(id));
    
    try {
        const connection  = await database.connect();
        const Recipe = database.loadModel(connection, 'recipe', RecipeSchema);
        const results = await Recipe.aggregate([
            { $match: { _id: { $nin: ignoreArray } } },
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