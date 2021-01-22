const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    default: 'Test'
  },
  location: {
    type: String,
    default: 'Undefined'
  },
  date: {
    type: Date,
    default: Date.now
  },
  result: {
    type: String,
    required: true
  },
  comments: {
    type: String
  }
});

module.exports = mongoose.model('test', TestSchema);
