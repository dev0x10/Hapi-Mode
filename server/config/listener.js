/**
 * Created by yauriedogawa on 4/12/14.
 */
"use strict";

module.exports = function(server) {

  server.on('log', function (event, tags) {
    if (tags.error) {
      console.log('Server error: ' + (event.data || 'unspecified'));
    }
  });

  server.on('request', function (request, event, tags) {
    if (tags.received) {
      console.log('New request: ' + event.data.method + " " + event.data.url);
    }
    else if(tags.error) {
      console.log("Request error");
      console.log(event.data.data.details[0]);
    }
  });

  server.on('response', function (request) {
    console.log('Response sent for request: ' + request.id);
  });

  server.on('internalError', function (request, err) {
    console.log('Error response (500) sent for request: ' + request.id + ' because: ' + err.message);
  });
};

