/**
 * Created by yauriedogawa on 4/13/14.
 */
"use strict";

angular.module('hapi-mode')
  .controller('LoginCtrl', function ($scope, UserService, $location) {
    $scope.user = {};
    $scope.login = function() {
      UserService.login($scope.user)
        .then(function(data) {
          console.log(data);
          $location.path("/dashboard");
        })
        .catch(function(err) {
          console.log("ERROR");
        });
    }
  });