/**
 * Created by yauriedogawa on 4/13/14.
 */
'use strict';

Application.Controllers.controller('LoginCtrl', function ($scope, $rootScope, LoginFactory, UserFactory, $location) {
    $scope.user = {};
    $scope.alert = {
      fail: false
    };
    $scope.login = function () {
      LoginFactory.login($scope.user)
        .then(function (response) {
          UserFactory.setData(response.data);
          UserFactory.setLogin(true);
          $rootScope.$broadcast('UserLoggedIn');
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