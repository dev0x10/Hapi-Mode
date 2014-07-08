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
    { method: 'GET', path: '/app.js',
      handler: {
        file: './app/app.js'
      }
    },
    { method: 'GET', path: '/routes.js',
      handler: {
        file: './app/routes.js'
      }
    },
    { method: 'GET', path: '/components/{file*}',
      handler: {
        directory: { path: './app/components/', listing: false, index: false }
      }
    },
    { method: 'GET', path: '/assets/{file*}',
      handler: {
        directory: { path: './app/assets/', listing: false, index: false }
      }
    },
    { method: 'GET', path: '/libs/{file*}',
      handler: {
        directory: { path: './app/libs/', listing: false, index: false }
      }
    },
    { method: 'GET', path: '/dashboard',
      config: {handler: function(req,rep) { rep.view('index'); }, auth: "session"}
    },
    { method: 'GET', path: '/{file*}',
      handler: function(req, res) {
        res.view("index");
      }
    }
  ]);
};