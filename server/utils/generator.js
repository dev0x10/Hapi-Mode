/**
 * Created by yauriedogawa on 5/4/14.
 */
"use strict";

var secretKey = require("../config/config").secret;

var Generator = {
  password: function (pwd) {
    return require("crypto").createHash("sha256").update(secretKey.concat(pwd)).digest("hex");
  }
};

module.exports = Generator;

