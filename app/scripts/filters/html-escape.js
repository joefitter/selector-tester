'use strict';

angular.module('selectorTesterApp')
  .filter('htmlEscape', function () {
    return function (input) {
      return input + ' hi';
    };
  });