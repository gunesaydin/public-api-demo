const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  regDate: {
    type: Date,
    default: Date.now
  },
  blogPosts: [{
    type: Schema.Types.ObjectId,
    ref: 'Blog'
  }]
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
