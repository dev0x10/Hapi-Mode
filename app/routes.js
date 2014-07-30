/**
 * Created by yauriedogawa on 4/13/14.
 */
'use strict';

angular.module('hapi-mode').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', { templateUrl: 'components/main/main-partial.html'})
    .when('/signup', { templateUrl: 'components/signup/signup-partial.html'})
    .when('/login', { templateUrl: 'components/login/login-partial.html'})
    .when('/dashboard', { templateUrl: 'components/dashboard/dashboard-partial.html'})
    .otherwise({ redirectTo: '/' });
  $locationProvider.html5Mode(true);
}]);