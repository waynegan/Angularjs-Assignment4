/**
 * Created by c0645457 on 7/08/15.
 */
'use strict';


var contactListApp = angular.module('contactListApp', [
  'ngRoute',
  'contactControllers',
  'contactListFilters',
  'contactListServices'
]);

contactListApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/contacts', {
        templateUrl: ' partials/contact-list.html',
        controller: 'ContactListCtrl'
      }).
      when('/contacts/:contactId', {
        templateUrl: ' partials/contact-detail.html',
        controller: 'ContactDetailCtrl'
      }).
      otherwise({
        redirectTo: '/contacts'
      });
  }]);
