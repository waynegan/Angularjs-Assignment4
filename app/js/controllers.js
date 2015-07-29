'use strict';

/* Controllers */
var contactControllers = angular.module('contactControllers', []);

contactControllers.controller('ContactListCtrl', ['$scope', 'Contact',
  function($scope, Contact) {
   
      $scope.contacts = Contact.query();

    $scope.orderProp = 'first';
  }]);

contactControllers.controller('ContactDetailCtrl', ['$scope', '$routeParams','Contact',
  function($scope, $routeParams, Contact) {
    $scope.contact = Contact.get({contactId: $routeParams.contactId}, function(contact) {
      $scope.mainImageUrl = contact.images[0];
    });
	$scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
