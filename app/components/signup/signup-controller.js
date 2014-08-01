/**
 * Created by yauriedogawa on 5/4/14.
 */
'use strict';

Application.Controllers.controller('SignupCtrl', function ($scope, SignupService) {
  $scope.user = {};
  $scope.alert = {success: false, fail: false};
  $scope.signup = function () {
    SignupService.signup($scope.user)
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

