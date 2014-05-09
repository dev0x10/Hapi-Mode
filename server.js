"use strict"

GLOBAL.rootPath = __dirname;

var Hapi = require("Hapi"),
    config = require("./server/config/config"),
    mongoose = require("mongoose"),
    options = require("./server/config/options");

var server = Hapi.createServer(config.server.host, config.server.port, options);
mongoose.connect("mongodb://" + config.mongodb.host + "/" + config.mongodb.db);


server.pack.require(["hapi-auth-cookie"], function (err) {

  err ? console.log(err) : "";

  server.auth.strategy('session', 'cookie',
    {
      password: config.secret,
      redirectTo: "/",
      ttl: 1000 * 3600,
      isSecure: false
    }
  );

  require("./server/config/listener")(server);
  require("./server/routes")(server);

  server.start(function () {
    console.log('Server started at: ' + server.info.uri);

    mongoose.connection.on("open", function () {
      console.log("Mongodb connected successfully")
    });

    mongoose.connection.on("error", function () {
      console.error("Cannot connect to mongodb");
    });
  });

});
