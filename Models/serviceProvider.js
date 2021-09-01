const mongoose = require('mongoose');
const User = require("./user");

// clone userschema
let serviceProviderSchema = User.userSchema.clone();

// add scpecific properties of service provider schema
serviceProviderSchema.add({
    RCCId: String,
    pictureCNI: {
        type: String,
        required: true
    },
    services: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    }

});

const ServiceProviderSchema = module.exports = mongoose.model ("ServiceProvider", serviceProviderSchema);