const mongoose = require('mongoose');
const { Schema, ObjectId } = mongoose;

// define command schema
const commandSchema = new Schema({
    status: {
        type: String,
        default: "en cours"
    },
    date: {
        type: Date,
        default: Date.now()
    },
    details: {
        type: String,
        required: false
    }, 
    userId: {
        type: String,
        required: true
    },
    serviceProviderId: {
        type: String,
        required: true
    },
    contratId: String

});

const Command = module.exports = mongoose.model('Command', commandSchema);