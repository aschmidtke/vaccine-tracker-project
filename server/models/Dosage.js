const mongoose = require('mongoose');

const { Schema } = mongoose;

const dosageSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Number,
        required: true
    }
});

const Dosage = mongoose.model('Dosage', dosageSchema);

module.exports = Dosage;