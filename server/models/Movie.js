const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {type: String, required: true},
    title2: {type: String, required: true},
    title3: {type: String, required: true},
    title4: {type: String, required: true},
    text2: {type: String, required: true},
    label: {type: String, required: true},
    contact: {type: String, required: true},
    button: {type: String, required: true},
    img: {type: String, required: true},
    img2: {type: String, required: true},
    img3: {type: String, required: true},
    img4: {type: String, required: true},
    year: {type: Number, required: true},
    price: {type: Number, required: true},
    price2: {type: Number, required: true},
    price3: {type: Number, required: true},
    price4: {type: Number, required: true},
    },
    );

module.exports = mongoose.model("movie", movieSchema);

