const mongoose = require('mongoose');
const { Schema, ObjectId } = mongoose;

// define appreciation schema
const appreciationSchema = new Schema({
    note: {
        type: Double,
        required: true
    },
    commentaire: {
        type: String,
        required: true
    },
    date: {
        type: Date,
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

const Appreciation = module.exports = mongoose.model('Appreciation', appreciationSchema);