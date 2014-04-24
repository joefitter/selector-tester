'use strict';

angular.module('selectorTesterApp')
  .filter('prettify', function () {
    return function (input) {
      return input.replace(/(&lt;html>)([^\n]+)/g, '$1\n$2')
        .replace(/(&lt;\/body>)([^\n]+)/g, '$1\n$2')
        .replace(/\n\n/g, '\n')
        .replace(/(\s\s+)/g, '<span class="unselected">$1</span>')
        .replace(/(\t+)/g, '<span class="unselected">$1</span>');
    };
  });