'use strict';

angular.module('selectorTesterApp')
  .directive('selector', function () {
    return {
      require: 'ngModel',
      restrict: 'C',
      link: function (scope, element, attrs, ngModel) {
        ngModel.$parsers.unshift(function (viewValue) {
          try {
            $(viewValue);
            ngModel.$setValidity('jquery', true);
            return viewValue;
          } catch(err){
            ngModel.$setValidity('jquery', false);
            return undefined;
          }
        });
      }
    };
  });