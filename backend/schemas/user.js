const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    first_name: {
        required: true,
        type: String
    },
    last_name: {
        required: true,
        type: String
    },
    dob: {
        required: true,
        type: String
    }
});

module.exports = userSchema;