'use strict';
var email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

/* Filters */

angular.module('contactListFilters', []).filter('sanitize', function() {
  return function(input) {
   var output="";
   if (email.test(input))
            output = input.replace(/@/g, '-AT-').replace(/\./g, '-DOT-');
        else
            output = input;
        return output;

  };
});
