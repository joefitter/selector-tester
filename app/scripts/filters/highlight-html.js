'use strict';

angular.module('selectorTesterApp')
  .filter('highlightHtml', function () {
    return function (input, scope) {
      var doc = new DOMParser().parseFromString(input, 'text/html');
      try {
        scope.nodes = $(doc).find(scope.selector);
      } catch (e) {
        console.log(e);
      }
      if(scope.nodes.length){
        console.log(scope.nodes);
      }
      return doc.documentElement.outerHTML;
    };
  });