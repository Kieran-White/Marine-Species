const mongoose = require('mongoose');

const speciesSchema = new mongoose.Schema({
    species: String,
    scientificName: String,
    speciesImg: String,
    endangerLevel: Number,
    length: String,
    information: String,
    habitats: [String]
});

module.exports = mongoose.model('Species', speciesSchema, 'marinespecies');