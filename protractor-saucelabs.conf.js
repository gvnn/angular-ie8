var conf = require('./gulp/conf');

exports.config = {

  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  baseUrl: 'http://localhost:' + (process.env.HTTP_PORT || '3000'),

  specs: [conf.paths.e2e + '/**/*.js'],

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }

  multiCapabilities: [
    {
      browserName:         'chrome',
      build:               process.env.TRAVIS_BUILD_NUMBER,
      'tunnel-identifier': (process.env.TRAVIS) ? process.env.TRAVIS_JOB_NUMBER : process.env.TUNNEL_ID,
    }, {
      browserName:         'firefox',
      build:               process.env.TRAVIS_BUILD_NUMBER,
      'tunnel-identifier': (process.env.TRAVIS) ? process.env.TRAVIS_JOB_NUMBER : process.env.TUNNEL_ID,
    }, {
      browserName:         'safari',
      build:               process.env.TRAVIS_BUILD_NUMBER,
      'tunnel-identifier': (process.env.TRAVIS) ? process.env.TRAVIS_JOB_NUMBER : process.env.TUNNEL_ID,
    }, {
      browserName:         'internet explorer',
      version:             11,
      build:               process.env.TRAVIS_BUILD_NUMBER,
      'tunnel-identifier': (process.env.TRAVIS) ? process.env.TRAVIS_JOB_NUMBER : process.env.TUNNEL_ID,
    }, {
      browserName:         'internet explorer',
      version:             10,
      build:               process.env.TRAVIS_BUILD_NUMBER,
      'tunnel-identifier': (process.env.TRAVIS) ? process.env.TRAVIS_JOB_NUMBER : process.env.TUNNEL_ID,
    }, {
      browserName:         'internet explorer',
      version:             9,
      build:               process.env.TRAVIS_BUILD_NUMBER,
      'tunnel-identifier': (process.env.TRAVIS) ? process.env.TRAVIS_JOB_NUMBER : process.env.TUNNEL_ID,
    }, {
      browserName:         'internet explorer',
      version:             8,
      build:               process.env.TRAVIS_BUILD_NUMBER,
      'tunnel-identifier': (process.env.TRAVIS) ? process.env.TRAVIS_JOB_NUMBER : process.env.TUNNEL_ID,
    }
  ]

};