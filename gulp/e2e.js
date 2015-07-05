var path = require('path');
var gulp = require('gulp');
var protractor = require('gulp-protractor');
var conf = require('./conf');
var browserSync = require('browser-sync');

var configPostfix = (process.env.SAUCE_USERNAME) ? '-saucelabs' : '';

function runProtractor (done) {
  var params = process.argv;
  var args = params.length > 3 ? [params[3], params[4]] : [];

  gulp.src(path.join(conf.paths.e2e, '/**/*.js'))
    .pipe(protractor.protractor({
      configFile: 'protractor' + configPostfix + '.conf.js',
      args: args
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    })
    .on('end', function () {
      // Close browser sync server
      browserSync.exit();
      done();
    });
}


gulp.task('test:e2e', ['protractor:src']);

gulp.task('test', ['test:unit', 'test:e2e']);

// Downloads the selenium webdriver
gulp.task('webdriver-update', protractor.webdriver_update);

gulp.task('webdriver-standalone', protractor.webdriver_standalone);

gulp.task('protractor:src', ['serve:e2e', 'webdriver-update'], runProtractor);
gulp.task('protractor:dist', ['serve:e2e-dist', 'webdriver-update'], runProtractor);