const mongoose = require('mongoose');

const dietSchema = new mongoose.Schema({
  date: { type: String, required: true },
  calories: { type: Number, required: true },
  nutrients: { type: Object, required: true },
});

const Diet = mongoose.model('Diet', dietSchema);
module.exports = Diet;
