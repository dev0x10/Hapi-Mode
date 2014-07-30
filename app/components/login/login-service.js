/**
 * Created by yauriedogawa on 5/5/14.
 */
'use strict';

Application.Services.factory('LoginService', function ($http) {
  return {
    login: function (userData) {
      return $http.post('/user/login', userData)
        .then(function (result) {
          return result;
        });
    }
  };
});

