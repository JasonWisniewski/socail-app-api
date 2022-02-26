const { Schema, model } = require('mongoose');
const DateFormat = require('../utils/dateFormat')

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
    }
  }
)

const Thought = model('Thought', ThoughtSchema);
module.exports = Thought