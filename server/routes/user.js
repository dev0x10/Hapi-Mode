/**
 * Created by yauriedogawa on 5/4/14.
 */
"use strict";

var userController = require("../controllers/user");
var Joi = require("joi");

var userSchema = {
  name: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  cpassword: Joi.string()
};

module.exports = function (server) {
  server.route([
    { method: 'POST',
      path: '/user',
      config: {
        handler: userController.signUp,
        validate: { payload: userSchema }
      }
    },
    { method: 'POST',
      path: '/user/login',
      config: {
        handler: userController.login,
        validate: { payload: { email: Joi.string().email().required(), password: Joi.string().required()} }
      }
    },
    { method: 'POST',
      path: '/user/logout',
      config: {
        handler: userController.logout}
    }
  ]);
};
