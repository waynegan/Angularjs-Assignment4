'use strict';

// Declare app level module which depends on views, and components
angular.module('contactListApp', [
  'ngRoute',
  'contactListApp.view1',
  'contactListApp.view2',
  'contactListApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

