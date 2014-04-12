/**
 * Created by yauriedogawa on 4/12/14.
 */
"use strict";

module.exports = function(server) {
  server.route([
    { method: 'GET', path: '/{path*}',
      handler: {
        directory: { path: './app', listing: false, index: true }
      }
    }
  ]);
};