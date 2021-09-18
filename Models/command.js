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
        type: ObjectId,
        required: true
    },
    serviceProviderId: {
        type: ObjectId,
        required: true
    },
    contratId: ObjectId

});

const Command = module.exports = mongoose.model('Command', commandSchema);