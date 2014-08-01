/**
 * Created by yauriedogawa on 5/9/14.
 */
'use strict';

Application.Controllers.controller('DashboardCtrl', function ($scope, $cookieStore) {
  console.log($cookieStore.get('user').name);
});

