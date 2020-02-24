const mongoose = require('mongoose');
const validator = require('validator');
const uuid = require('uuid');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {
        required: true,
        type: String,
        validate: {
            validator: validator.isEmail,
            message: 'Please ensure the email is valid.'
        }
    },
    password: {
        required: true,
        minlength: [8, 'Please ensure your password is at least 8 characters long.'],
        type: String
    },
    first_name: {
        required: true,
        minlength: [2, 'Please ensure your first name is at least 2 characters long.'],
        type: String
    },
    last_name: {
        required: true,
        minlength: [2, 'Please ensure your last name is at least 2 characters long.'],
        type: String
    },
    dob: {
        type: String
    },
    posts: {
        type: [{
            id: {
                type: String,
                default: () => uuid.v4()
            },
            message: {
                type: String,
                minlength: [8, 'Please ensure your post is at least 8 characters long'],
                required: true
            },
            datestamp: {
                type: String,
                default: () => Date.now()
            }
        }]
    }
});

module.exports = userSchema;