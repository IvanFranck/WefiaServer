const mongoose = require('mongoose');
const { Schema } = mongoose;

// define user schema
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    birthDay: {
        type: String,
        required: true
    },
    birthPlace: {
        required: true,
        type: String
    },
    profilePicture: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    mailAddress: {
        type: String,
        required: true
    }
});

const User =  mongoose.model('User', userSchema);

exports.userSchema = userSchema;
exports.userModel = User;