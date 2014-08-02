/**
 * Created by yauriedogawa on 8/2/14.
 */

'use strict';

Application.Controllers.controller('HeaderCtrl', function ($scope, $location, $cookieStore, UserFactory) {

  $scope.isLoggedIn = false;

  //listener for broadcast from login-controller
  $scope.$on('UserLoggedIn',function () {
    $scope.isLoggedIn = UserFactory.isLoggedIn;
  });

  $scope.logout = function () {
    UserFactory.destroy();
    $scope.isLoggedIn = false;
    $location.path('/');
  };

});