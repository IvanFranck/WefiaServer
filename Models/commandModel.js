const mongoose = require('mongoose');
const { Schema, ObjectId } = mongoose;

// define command schema
const commandSchema = new Schema({
    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    details: {
        type: String,
        required: true
    }, 
    userId: {
        type: ObjectId,
        required: true
    },
    serviceProviderId: {
        type: ObjectId,
        required: true
    }

});

const Command = module.exports = mongoose.model('Command', commandSchema);