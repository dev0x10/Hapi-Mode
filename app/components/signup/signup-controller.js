/**
 * Created by yauriedogawa on 5/4/14.
 */
'use strict';

Application.Controllers.controller('SignupCtrl', function ($scope, SignupFactory) {
  $scope.user = {};
  $scope.alert = {success: false, fail: false};
  $scope.signup = function () {
    SignupFactory.signup($scope.user)
      .then(function (data) {
        if (data.status === 201) {
          $scope.alert.success = true;
          $scope.user = {};
        }
      })
      .catch(function (err) {
        $scope.alert.fail = true;
      });
  };

  $scope.dismiss = function () {
    $scope.alert.success = false;
    $scope.alert.fail = false;
  };

});

