// PUT = UPDATE
// Does the provided ID from the query match an existing record?
    // if it doesnt respond with a 404 and relevant json error
// Validate the submitted data - is it valid?
    // if not - respond with 400 and relevant json error
// try to update the record

// if there are any errors - return a 500 and "try again later" json error

// /recipes
    // GET /recipes - get all the recipes
    // GET /recipes/{id} - get specific recipe
    // POST /recipes - create a new recipe
    // PUT /recipe/{id} - update a specific recipe - update.js?id={id}
    // DEL /recipes/{id} - delete a specific recipe

const database = require('../../services/database');
const recipeSchema = require('../../schemas/recipe');

module.exports = async (req, res) => {
    try {
        const query = { _id: req.query.id };
        const connection = await database.connect();
        const Recipe = database.loadModel(connection, 'recipe', recipeSchema);
        
        const foundRecipe = await Recipe.findOne(query);
        if (!foundRecipe) {
            return res.status(404).json({
                error: 'recipe not found'
            });
        }

        try {
            await new Recipe(req.body).validate();
        } catch (error) {
            return res.status(400).json({
                error: 'not valid.'
            })
        }

        const updatedRecipe = await Recipe.findOneAndUpdate(query, { $set: req.body }, { new: true });
        return res.json({
            result: updatedRecipe
        });

    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            error: 'Unexpected error. Please try again later.'
        })
    }
}