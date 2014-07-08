/**
 * Created by yauriedogawa on 4/13/14.
 */
"use strict";

angular.module('hapi-mode').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', { templateUrl: 'main/main-partial.html'})
    .when('/signup', { templateUrl: 'signup/signup-partial.html'})
    .when('/login', { templateUrl: 'login/login-partial.html'})
    .when('/dashboard', { templateUrl: 'dashboard/dashboard-partial.html'})
    .otherwise({ redirectTo: '/' });
  $locationProvider.html5Mode(true);
}]);