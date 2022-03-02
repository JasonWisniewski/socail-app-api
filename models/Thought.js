const { Schema, model } = require('mongoose');
const DateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => DateFormat(createdAtVal)
    },
    username: {
      type: String,
      required: true
    },
    reactions:[reactionSchema]
  },
  {
    toJSON: {
      virtuals: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
  
)


const Thought = model('Thought', ThoughtSchema);
module.exports = Thought