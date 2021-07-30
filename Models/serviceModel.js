const mongoose = require('mongoose');
const { Schema } = mongoose;

// define service schema
const serviceSchema = new Schema({
    
    wording: {
        type: String,
        required: true
    }

});

const Service = module.exports = mongoose.model('Service', serviceSchema);