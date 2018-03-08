const mongoose = require('mongoose');

const sprintSchema = new mongoose.Schema({
  title: { type: String },
  nominator: { type: String },
  score: { type: Number },
});

const Sprint = mongoose.model('Sprint', sprintSchema);

module.exports = Sprint;
