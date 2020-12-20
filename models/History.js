const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String
  },
  location: {
    type: String,
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

module.exports = mongoose.model('history', PostSchema);
