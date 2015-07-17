'use strict';

describe('contactListApp.version module', function() {
  beforeEach(module('contactListApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
