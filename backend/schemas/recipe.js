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
        required: [true, 'Please provide a name.'],
        type: String
    },
    image: {
        required: [true, 'Please provide a dish image.'],
        type: String       
    },
    servings: {
        required: [true, 'Please provide a servings count.'],
        type: Number
    },
    time: {
        prep: {
            required: [true, 'Please provide a prep time.'],
            type: Number
        },
        cook: {
            required: [true, 'Please provide a cook time.'],
            type: Number
        }
    },
    vegetarian: {
        type: Boolean
    },
    ingredients: {
        type: [IngredientSchema],
        default: []
    }
});

module.exports = recipe;