/**
 * Created by yauriedogawa on 4/12/14.
 */
"use strict";

module.exports = function(server) {
  require("./static")(server);
  require("./user")(server);
};