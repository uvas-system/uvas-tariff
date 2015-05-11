'use strict';

// Declare app level module which depends on views, and components
var tariffWebClient = angular.module('uvas-tariff-web-client', ['ngRoute']).
config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/',{
         templateUrl:'./partials/login.html'
        ,controller:'LoginController'
      });
      $routeProvider.otherwise({redirectTo: '/'});
}]);
