const database = require('../../services/database');
const recipeSchema = require('../../schemas/recipe');

module.exports = async (req, res) => {
    try {
        const connection = await database.connect();
        const Recipe = database.loadModel(connection, 'recipe', recipeSchema);

        const recipeObject = new Recipe(req.body);

        try {
            await recipeObject.validate();
        } catch (error) {
            const failures = Object.keys(error.errors).reduce((acc, key) => {
                acc[key] = error.errors[key].message;
                return acc;
            }, {});
            return res.status(400).json({
                error: 'Validation failed',
                failures
            });
        }

        const foundRecipe = await Recipe.findOne({name: req.body.name})
        if (foundRecipe) {
            return res.status(409).json({
                error: 'We already have that recipe.'
            });
        }

        const insertedRecipe = await recipeObject.save();

        return res.json({
            success: true,
            recipe: insertedRecipe
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Unexpected error. Please try again later."
        })
    }
    
};