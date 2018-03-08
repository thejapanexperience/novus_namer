const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  displayName: { type: String },
  email: { type: String },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
