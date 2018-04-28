const mongoose = require('mongoose');

const RollSchema = new mongoose.Schema({
    film: {
        brand: String,
        model: String,
        iso: String,
        expCount: Number,
        expDate: Date,
        startDate: Date,
        finishDate: Date
    },
    frames: {type: Array, "default": []}
});

const Roll = mongoose.model("Roll", RollSchema);

module.exports = { Roll };