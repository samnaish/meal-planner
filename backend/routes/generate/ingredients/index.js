const database = require('../../../services/database');
const RecipeSchema = require('../../../schemas/recipe');
const { stringToArray } = require('../../../services/helpers');

module.exports = async(req, res) => {

    const { ids = '' } = req.query;

    const retrieveArray = stringToArray(ids, ',');

    try {
        
        const connection = await database.connect();
        const Recipe = database.loadModel(connection, 'recipe', RecipeSchema);
        const conditions = { _id: { $in: retrieveArray } };
        const foundRecipes = await Recipe.find(conditions, {
            ingredients: true
        })


        const ingredients = foundRecipes.reduce((acc, recipe) => {
            
            // for each given recipe - combine the ingredients with the acc
            recipe.ingredients.forEach((ingredient) => {
                const previousRecord = acc[ingredient.name];
                const newQuantity = previousRecord ? previousRecord.quantity + ingredient.quantity : ingredient.quantity;
                acc[ingredient.name] = {
                    quantity: newQuantity,
                    unit: ingredient.unit
                };
            })
            return acc;
        }, {})


        return res.json({
            ingredients
        });


    } catch (error) {
        console.log('============');
        console.log('error in ingredients API', error);
        console.log('============');
        res.status(500).json({
            error: 'Unexpected error'
        })
    }
}