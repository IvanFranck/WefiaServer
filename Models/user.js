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
    birthdayDate: {
        type: Date,
        required: true
    },
    birthdayPlace: {
        required: true,
        type: String
    },
    profilePicture: {
        type: String,
        required: true
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