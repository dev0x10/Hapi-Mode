/**
 * Created by yauriedogawa on 5/4/14.
 */
"use strict";

var mongoose = require("mongoose"),
  mongooseSchema = mongoose.Schema;

var UserSchema = new mongooseSchema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  todos: {
    type: mongooseSchema.Types.ObjectId,
    ref: 'ToDo'
  }
});

UserSchema.pre('save', function (next) {
  this.password = require("../utils/generator").password(this.password);
  next();
});

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');