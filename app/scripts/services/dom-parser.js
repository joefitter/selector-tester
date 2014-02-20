'use strict';

angular.module('selectorTesterApp')
  .factory('domParser', ['$log', function ($log) {
    return function(input, selector) {
      var parser = new DOMParser(),
        doc = parser.parseFromString(input, 'text/html'),
        outerHTML = doc.documentElement.outerHTML,
        firstLine = outerHTML.substring(0, outerHTML.indexOf('>')),
        prependDocument = input.substring(0, input.indexOf(firstLine)),
        output = prependDocument + outerHTML,
        jqueryNodes = [];

      try {
        jqueryNodes = $(doc).find(selector);
      }
      catch(err) {
        $log.error(err);
      }
      if(jqueryNodes.length){
        var nodes = [],
          nodesHTML = [];
        jqueryNodes.each(function(i, node){
          if(nodesHTML.indexOf(node.outerHTML) === -1){
            nodes.push(node);
            nodesHTML.push(node.outerHTML);
          }
        });
        angular.forEach(nodesHTML, function (value) {
          output = output.split(value).join('**&lt;**span class="selected">' + value + '**&lt;**/span>');
        });
      }

      output = output.replace(/</g, '&lt;').replace(/\*\*\&lt;\*\*/g, '<');

      return output;
    };
  }]);