'use strict';

angular.module('contactListApp.version', [
  'contactListApp.version.interpolate-filter',
  'contactListApp.version.version-directive'
])

.value('version', '0.1');
