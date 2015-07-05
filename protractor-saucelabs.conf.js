exports.config = {

  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

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