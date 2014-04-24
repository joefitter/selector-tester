'use strict';

angular.module('selectorTesterApp', [
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/jquery.html',
        controller: 'JQueryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
