exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],
  
  chromeOnly: false,
  multiCapabilities: [{
    'browserName': 'firefox',
  }],

  baseUrl: 'http://localhost:8000/app/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
