const mongoose = require('mongoose');

const RollSchema = new mongoose.Schema({
    film: {
        brand: String,
        model: String,
        iso: String,
        expCount: Number,
        expDate: Date
    },
    frames: []
});

const Roll = mongoose.model("Roll", RollSchema);

module.exports = { Roll };