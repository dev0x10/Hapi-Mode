/**
 * Created by yauriedogawa on 4/13/14.
 */
"use strict";

angular.module('hapi-mode')
  .controller('LoginCtrl', function ($scope, UserService, $location) {
    $scope.user = {};
    $scope.alert = {
      fail: false
    };
    $scope.login = function () {
      UserService.login($scope.user)
        .then(function (data) {
          $location.path("/dashboard");
        })
        .catch(function (err) {
          $scope.alert.fail = true;
          $scope.user = {};
        });
    };
    $scope.dismiss = function () {
      $scope.alert.fail = false;
    };
  });