const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: String,
  image: String,
  user: {
    id: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  created: {
    type: Date,
    default: Date.now
  },
  body: String
});

module.exports = mongoose.model('Blog', blogSchema);