const mongoose = require ('mongoose');

const speciesSchema = new mongoose.Schema({
    species: String,
    speciesImg: String,
    endangerLevel: Number
});

module.exports = mongoose.model('Species', speciesSchema, 'marinespecies');