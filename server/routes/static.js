/**
 * Created by yauriedogawa on 4/13/14.
 */
"use strict";

module.exports = function(server) {
  server.route([
    { method: 'GET', path: '/scripts/{file*}',
      handler: {
        directory: { path: './app/scripts/', listing: false, index: false }
      }
    },
    { method: 'GET', path: '/img/{file*}',
      handler: {
        directory: { path: './app/img/', listing: false, index: false }
      }
    },
    { method: 'GET', path: '/css/{file*}',
      handler: {
        directory: { path: './app/css/', listing: false, index: false }
      }
    },
    { method: 'GET', path: '/partials/{file*}',
      handler: function(req, res) {
        res.view("partials/" + req.params.file);
      }
    },
    { method: 'GET', path: '/templates/{file*}',
      handler: function(req, res) {
        res.view("templates/" + req.params.file);
      }
    },
    { method: 'GET', path: '/',
      handler: function(req, rep) {
        rep.view("index");
      }
    }
  ]);
};