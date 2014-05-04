"use strict"

GLOBAL.rootPath = __dirname;

var Hapi = require("Hapi"),
    config = require("./server/config/config"),
    mongoose = require("mongoose"),
    options = require("./server/config/options");

var server = Hapi.createServer(config.server.host, config.server.port, options);
mongoose.connect("mongodb://" + config.mongodb.host + "/" + config.mongodb.db);

//listener for server event
require("./server/config/listener")(server);

//routes
require("./server/routes")(server);

server.start(function(){
  console.log('Server started at: ' + server.info.uri);

  mongoose.connection.on("open", function () {
    console.log("Mongodb connected successfully")
  });

  mongoose.connection.on("error", function () {
    console.error("Cannot connect to mongodb");
  });
});