'use strict';

/* Services */

var contactListServices = angular.module('contactListServices', ['ngResource']);

 contactListServices.factory('Contact', ['$resource',
  function($resource){
    return $resource('http://ipro.lambton.on.ca/contacts/:contactId', {}, {
      query: {method:'GET', params:{contactId:''}, isArray:true}
    });
  }]);
