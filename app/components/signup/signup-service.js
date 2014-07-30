/**
 * Created by yauriedogawa on 5/5/14.
 */
'use strict';

Application.Services.factory('SignupService', function ($http) {
  return {
    signup: function (userData) {
      return $http.post('/user', userData)
        .then(function (result) {
          return result;
        });
    }
  };
});

