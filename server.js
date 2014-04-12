"use strict"

GLOBAL.rootPath = __dirname;

var Hapi = require("Hapi"),
    config = require("./server/config/config"),
    options = require("./server/config/options");

var server = Hapi.createServer(config.server.host, config.server.port, options);

//listener for server event
require("./server/config/listener")(server);

//routes
require("./server/routes")(server);

server.start(function(){
  console.log('Server started at: ' + server.info.uri);
});