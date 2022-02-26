const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      Unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      Required: true,
      Unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    thoughts: [],
      // array of _id values referencing thought model
    friends: [],
      // array of _id values referencing User model self reference
  },
  {
    toJSON: {
      virtuals: true
    },
    // prevents virtuals from creating duplicate of _id as id
    id: false
  }
);

UserSchema.virtual('friendCount').get
(function() {
  return this.friends.reduce
})

const User = model('User', UserSchema);

module.exports = User;