const database = require('../../services/database');
const authentication = require('../../services/authentication');
const recipeSchema = require('../../schemas/recipe');
const userSchema = require('../../schemas/user');


module.exports = async (req, res) => {
    const sessionToken = req.headers['x-sessiontoken'];

    try {
        const session = await authentication.decodeToken(sessionToken);
        if (!session) {
            return res.status(400).json({
                error: 'Please authenticate.'
            });
        }

        const connection = await database.connect();
        const Recipe = database.loadModel(connection, 'recipe', recipeSchema);

        const recipeObject = new Recipe({
            ...req.body,
            author: session.user._id
        });

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

        const foundRecipe = await Recipe.findOne({ name: req.body.name })
        if (foundRecipe) {
            return res.status(409).json({
                error: 'We already have that recipe.'
            });
        }

        const insertedRecipe = await recipeObject.save();

        return res.json({
            recipe: insertedRecipe
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Unexpected error. Please try again later."
        })
    }

};
