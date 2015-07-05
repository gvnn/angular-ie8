describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should include h1 with correct data', function() {
    expect(page.headerMessage.getText()).toBe('Hello world');
  });

  it('should change h1 text', function() {
    page.messageInputText.clear();
    page.messageInputText.sendKeys('ie8');
    expect(page.headerMessage.getText()).toBe('Hello ie8');
  });

});