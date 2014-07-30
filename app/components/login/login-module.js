/**
 * Created by yauriedogawa on 4/13/14.
 */
'use strict';

Application.Controllers.controller('LoginCtrl', function ($scope, LoginService, $location) {
    $scope.user = {};
    $scope.alert = {
      fail: false
    };
    $scope.login = function () {
      LoginService.login($scope.user)
        .then(function (data) {
          $location.path('/dashboard');
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