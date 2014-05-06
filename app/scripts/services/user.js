/**
 * Created by yauriedogawa on 5/5/14.
 */
"use strict";

angular.module('hapi-mode')
  .factory('UserService', function ($http) {
    return {
      signup: function(userData) {
        return $http.post('/user', userData)
          .then(function (result) {
            return result;
          });
      },
      login: function(userData) {
        return $http.post("/user/login", userData)
          .then(function (result) {
            return result;
          });
      }
    }
  });

