/**
 * Created by yauriedogawa on 4/13/14.
 */
"use strict";

angular.module('hapi-mode').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', { templateUrl: '/partials/main', controller: 'MainCtrl' })
    .when('/signup', { templateUrl: '/partials/signup', controller: 'SignupCtrl' })
    .when('/login', { templateUrl: '/partials/login', controller: 'LoginCtrl' })
    .otherwise({ redirectTo: '/' });
  $locationProvider.html5Mode(true);
}]);