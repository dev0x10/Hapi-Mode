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
  }
};

module.exports = userController;
