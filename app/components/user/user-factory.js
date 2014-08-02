/**
 * Created by yauriedogawa on 8/2/14.
 */

'use strict';

Application.Factories.factory('UserFactory', function ($cookieStore) {
  var user = {
    'name': '',
    'email': '',
    'isLoggedIn': false,
    setData: function (userData) {
      $cookieStore.put('hapimode-user',userData);
      this.name = userData.name;
      this.email = userData.email;
    },
    setLogin: function (isLoggedIn) {
      this.isLoggedIn = isLoggedIn;
    },
    destroy: function(){
      $cookieStore.remove('hapimode-user');
      this.name = '';
      this.email = '';
      this.isLoggedIn = false;
    }
  };

  return user;
});