// schema and model for acronym

const mongoose = require('mongoose');

const acronymSchema = new mongoose.Schema({
  acronym: {
    type: String,
    required: true,
    uppercase: true,
    unique: true,
  },
  definition: {
    type: String,
    required: true,
    unique: true,
  },
});

const Acronym = mongoose.model('Acronym', acronymSchema);
module.exports = Acronym;
