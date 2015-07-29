'use strict';

/* Assignment #2 End-to-End Testing
 * Prepared By: Eric Scouler
 * For: CPD-3262
 * 2015/07/15
 */
/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Contact List App', function() {
  beforeEach(function() {
    browser.get('http://localhost:8000/app/index.html');
  });

  it('should have 6 tr elements with class contact', function() {

    expect(element.all(by.css('tr.contact')).count()).toEqual(6);
  });
  
  it('should filter on Cooper to only two results', function() {
      element(by.model('query')).sendKeys('Cooper');
      expect(element.all(by.repeater('contact in contacts')).count()).toEqual(2);
  });

  it('should order correctly by Extension', function() {
    element(by.model('query')).sendKeys('33');
    element(by.cssContainingText('option', 'Extension')).click();
	  element.all(by.repeater('contact in contacts')).then(function(contacts) {
      expect(contacts[0].element(by.className('first')).getText()).toEqual("Liane");
      expect(contacts[1].element(by.className('first')).getText()).toEqual("Rick");
      expect(contacts[2].element(by.className('first')).getText()).toEqual("Samantha");
    });
  });

  it('should order correctly by First Name', function() {
    element(by.model('query')).sendKeys('cooper');
    element(by.cssContainingText('option', 'First Name')).click();
    element.all(by.repeater('contact in contacts')).then(function(contacts) {
      expect(contacts[0].element(by.className('first')).getText()).toEqual("Jim");
      expect(contacts[1].element(by.className('first')).getText()).toEqual("Liane");
    });
  });

  it('should order correctly by Last Name', function() {
    element(by.model('query')).sendKeys('L');
    element(by.cssContainingText('option', 'Last Name')).click();
    element.all(by.repeater('contact in contacts')).then(function(contacts) {
      expect(contacts[0].element(by.className('first')).getText()).toEqual("Liane");
      expect(contacts[1].element(by.className('first')).getText()).toEqual("Len");
    });
  });

  it('should sanitize email addresses', function() {
    element(by.model('query')).sendKeys('Len');
    element.all(by.repeater('contact in contacts')).then(function(contacts) {
      expect(contacts[0].element(by.css('.email a')).getText()).toEqual('Len-DOT-Payne-AT-lambtoncollege-DOT-ca');
    });
  });

  
  it('should re-direct index.html to index.html#/contacts', function() {
        expect(browser.getCurrentUrl()).toEqual("http://localhost:8000/app/index.html#/contacts");
    });

  describe('Contact List Detail View', function() {
    
    
    it('should have a link back to the contact list at the top of the page', function() {
      browser.get('http://localhost:8000/app/index.html#/contacts/len');
      element.all(by.tagName('a')).first().click();
      expect(browser.getCurrentUrl()).toEqual("http://localhost:8000/app/index.html#/contacts");
    });

    it('should display Len page properly', function() {
      browser.get('http://localhost:8000/app/index.html#/contacts/len');
      expect(element.all(by.binding('contact.first')).first().getText()).toEqual("Len");
      expect(element.all(by.binding('contact.last')).first().getText()).toEqual("Payne");
    });

  });
});