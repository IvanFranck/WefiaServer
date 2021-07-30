const mongoose = require('mongoose');
const { Schema, ObjectId } = mongoose;

// define notification schema
const notificationSchema = new Schema({
    details: {
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
    }

});

const Notification = module.exports = mongoose.model('Notification', notificationSchema);