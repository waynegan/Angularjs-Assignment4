'use strict';

/* Services */

var contactListServices = angular.module('contactListServices', ['ngResource']);

 contactListServices.factory('Contact', ['$resource',
  function($resource){
    return $resource('http://localhost:8001/:contactId', {}, {
      query: {method:'GET', params:{contactId:''}, isArray:true}
    });
  }]);
