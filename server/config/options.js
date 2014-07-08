/**
 * Created by yauriedogawa on 4/12/14.
 */
"use strict";

var swig = require("swig");
swig.setDefaults({ cache: false });

module.exports = {
  views: {
    path: rootPath + "/app/views",
    engines: { html: swig },
    isCached: false,
    allowAbsolutePaths : true
  }
}