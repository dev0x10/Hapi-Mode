'use strict';

var Application = Application || {};

Application.Constants = angular.module('hapi-mode.constants', []);
Application.Services = angular.module('hapi-mode.services', []);
Application.Controllers = angular.module('hapi-mode.controllers', []);
Application.Filters = angular.module('hapi-mode.filters', []);
Application.Directives = angular.module('hapi-mode.directives', []);

angular.module('hapi-mode', [
  'ngRoute',
  'ngCookies',
  'mm.foundation',
  'hapi-mode.constants',
  'hapi-mode.services',
  'hapi-mode.controllers',
  'hapi-mode.filters',
  'hapi-mode.directives'
]);