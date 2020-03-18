const database = require('../../services/database');
const RecipeSchema = require('../../schemas/recipe');

const DEFAULT_DAYS = 4;

module.exports = async (req, res) => {

    const { days, ignore = '', vegetarian } = req.query;
    const numDays = parseInt(days, 10);
    const isVegetarian = vegetarian === 'true';

    const ignoreArray = ignore
        .split(',')
        .filter(id => id.length > 0)
        .map(id => database.toObjectId(id));

    try {

        const matchConditions = { _id: { $nin: ignoreArray } };
        if (isVegetarian) {
            matchConditions.vegetarian = true;
        }

        const connection = await database.connect();
        const Recipe = database.loadModel(connection, 'recipe', RecipeSchema);
        const results = await Recipe.aggregate([
            { $match: matchConditions },
            { $sample: { size: isNaN(numDays) ? DEFAULT_DAYS : numDays } },
            { $project: { name: 1, image: 1 } }
        ]);

        return res.json({
            results
        });

    } catch (error) {
        console.error('Error in generate API', error);
        res.status(500).json({
            error: 'Unexpected error, Please try again later.'
        })
    }

}
