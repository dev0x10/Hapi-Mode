/**
 * Created by yauriedogawa on 4/12/14.
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
      handler: {
        directory: { path: './app/partials/', listing: false, index: false }
      }
    },
    { method: 'GET', path: '/templates/{file*}',
      handler: {
        directory: { path: './app/templates/', listing: false, index: false }
      }
    },
    { method: 'GET', path: '/',
      handler: function(req, rep) {
        rep.view("index.html");
      }
    }
  ]);
};