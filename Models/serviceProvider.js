const mongoose = require('mongoose');
const User = require("./user");

// clone userschema
let serviceProviderSchema = User.userSchema.clone();

// add scpecific properties of service provider schema
serviceProviderSchema.add({
    RCCId: String,
    pictureCNI: {
        type: Array,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }

});

const ServiceProviderSchema = module.exports = mongoose.model ("ServiceProvider", serviceProviderSchema);