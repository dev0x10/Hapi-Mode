/**
 * Created by yauriedogawa on 4/13/14.
 */
"use strict";

module.exports = function(server) {
  server.route([
    { method: 'GET', path: '/',
      handler: function(req, res) {
        res.view("index");
      }
    },
    { method: 'GET', path: '/dashboard',
      config: {handler: function(req,rep) { rep.view('index'); }, auth: "session"}
    },
    { method: 'GET', path: '/{file*}',
      handler: {
        directory: { path: './app', listing: false, index: true }
      }
    }
  ]);
};