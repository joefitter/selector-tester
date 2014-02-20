'use strict';

// angular.module('selectorTesterApp')
//   .directive('output', ['domParser', '$sce', function (domParser, $sce) {
//     return {
//       restrict: 'E',
//       require: '?ngModel',
//       replace: true,
//       scope: {
//         selector: '@'
//       },
//       template: '<div class="output" contenteditable ng-bind="parseHtml(selector)">Everything contained within this div is editable in browsers that support <code>HTML5</code></div>',
//       link: function(scope, element, attrs, ngModel){
//         function read() {
//           var input = element.text();
//           ngModel.$setViewValue(input);
//           scope.inputHtml = input;
//         }

//         scope.parseHtml = function(selector){
//           return domParser(element.text(), selector);
//         };

//         ngModel.$render = function () {
//           element.html(ngModel.$viewValue);
//         };

//         element.bind('blur', function(){
//           scope.$apply(read);
//         });

//       }
//     };
//   }]);

angular.module('selectorTesterApp')
  .directive('output', ['domParser', '$sce', 'prettifyFilter', function (domParser, $sce, prettify) {
    return {
      scope: {
        inputHtml: '@',
        selector: '@'
      },
      replace: true,
      template: '<pre class="prettyprint" ng-bind-html="parseHtml(inputHtml, selector)"></pre>',
      link: function (scope, element) {
        scope.parseHtml = function (input, selector) {
          return $sce.trustAsHtml(
            prettyPrintOne(
              prettify(
                domParser(input, selector)
              )
            )
          );
        };
        function grabFirstElem(){
          element.find('span.selected').first().addClass('highlighted');
        }
        scope.$watch('inputHtml', function(){
          grabFirstElem();
        });
        scope.$watch('selector', function(){
          grabFirstElem();
        });
      }
    };
  }]);
