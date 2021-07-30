const mongoose = require('mongoose');
const user = require("./userModel");

// clone userschema
let serviceProviderSchema = user.userSchema.clone();

// add scpecific properties of service provider schema
serviceProviderSchema.add({
    pictureCNI: {
        type: String,
        required: true
    },
    services: {
        type: Array,
        required: true
    }

});

const ServiceProviderSchema = module.exports = mongoose.model ("ServiceProvider", serviceProviderSchema);
