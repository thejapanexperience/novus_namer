const mongoose = require('mongoose');

const nominationSchema = new mongoose.Schema({
  title: { type: String },
  nominator: { type: String },
  score: { type: Number },
  // user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Nomination = mongoose.model('Nomination', nominationSchema);

module.exports = Nomination;
