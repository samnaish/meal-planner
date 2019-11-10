const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    quantity: {
        required: true,
        type: Number
    },
    unit: {
        required: true,
        type: String
    }
}, { _id: false });

const recipe = new Schema({
    name: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String       
    },
    servings: {
        required: true,
        type: Number
    },
    time: {
        prep: {
            required: true,
            type: Number
        },
        cook: {
            required: true,
            type: Number
        }
    },
    ingredients: {
        type: [IngredientSchema],
        default: []
    }
});

module.exports = recipe;