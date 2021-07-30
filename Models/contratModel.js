const mongoose = require('mongoose');
const { Schema, ObjectId } = mongoose;

// define contrat schema
const contratSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    workCondition: {
        type: String,
        required: true
    },
    means: {
        type: String,
        required: true
    },
    price: {
        type : Number,
        require: true
    },
    // expressed in days
    paymentDeadLine: {
        type: Number,
        required: true
    },
    paymentMeans : {
        type: String,
        required: true
    },
    expenditureManager: {
        type: String,
        required: true
    },
    interests : {
        required: true,
        type: Double
    },
    signatureDate: {
        type: Date,
        required: true
    },
    dateEnd: {
        type: Date,
        required: true
    },
    initialisationDate: {
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

const Contrat = module.exports = mongoose.model("Contrat", contratSchema);