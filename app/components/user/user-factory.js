/**
 * Created by yauriedogawa on 8/2/14.
 */

'use strict';

Application.Factories.factory('UserFactory', function ($http, $cookieStore) {
  var user = {
    'name': '',
    'email': '',
    'isLoggedIn': false,
    setData: function (userData) {
      $cookieStore.put('hapimode-user', userData);
      this.name = userData.name;
      this.email = userData.email;
    },
    setLogin: function (isLoggedIn) {
      this.isLoggedIn = isLoggedIn;
    },
    destroy: function () {
      $cookieStore.remove('hapimode-user');
      this.name = '';
      this.email = '';
      this.isLoggedIn = false;
      var logoutResult = this.logout();
    },
    login: function (userData) {
      return $http.post('/user/login', userData)
        .then(function (result) {
          return result;
        });
    },
    logout: function () {
      return $http.post('/user/logout')
        .then(function (result) {
          return result;
        });
    },
    signup: function (userData) {
      return $http.post('/user', userData)
        .then(function (result) {
          return result;
        });
    }
  };

  return user;
});