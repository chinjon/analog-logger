const mongoose = require('mongoose');

const RollSchema = new mongoose.Schema({
    film: {
        brand: String,
        model: String,
        iso: String,
        expCount: Number,
        // expData: Date
    },
    // dates: {
    //     loaded: Date,
    //     finished: Date,
    //     lab: Date,
    //     developed: Date
    // }
});

const Roll = mongoose.model("Roll", RollSchema);

module.exports = { Roll };