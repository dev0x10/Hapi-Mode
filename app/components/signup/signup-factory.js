/**
 * Created by yauriedogawa on 5/5/14.
 */
'use strict';

Application.Factories.factory('SignupFactory', function ($http) {
  return {
    signup: function (userData) {
      return $http.post('/user', userData)
        .then(function (result) {
          return result;
        });
    }
  };
});

