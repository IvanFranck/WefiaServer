const mongoose = require('mongoose');
const User = require("./user");

// clone userschema
let serviceProviderSchema = User.userSchema.clone();

// add scpecific properties of service provider schema
serviceProviderSchema.add({
    pictureCNI: {
        type: String,
        required: true
    },
    services: {
        type: Array,
        required: true
    },
    // given in number of years
    experience: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }

});

const ServiceProviderSchema = module.exports = mongoose.model ("ServiceProvider", serviceProviderSchema);