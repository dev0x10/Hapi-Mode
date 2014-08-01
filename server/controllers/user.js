/**
 * Created by yauriedogawa on 5/4/14.
 */
"use strict";

var userSchema = require("../models/user");

var userController = {
  signUp: function (req, rep) {
    var user = new userSchema(req.payload);
    user.save(function (err, success) {
      if(err) {
        rep().code(500);
      }
      rep().code(201);
    });
  },
  login: function (req, rep) {
    req.payload.password = require("../utils/generator").password(req.payload.password);
    userSchema.findOne(req.payload, function(err, user) {
      if(user) {
        req.auth.session.set(user);
        user.password = undefined;
        rep(user).code(200);
      }
      else {
        rep().code(401);
      }
    })
  }
};

module.exports = userController;
