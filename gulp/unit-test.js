var path = require('path');
var gulp = require('gulp');
var karma = require('karma');

function runTests (singleRun, done) {
  karma.server.start({
    configFile: path.join(__dirname, '/../karma.conf.js'),
    singleRun: singleRun,
    autoWatch: !singleRun
  }, function() {
    done();
  });
}

gulp.task('test:unit', ['scripts'], function(done) {
  runTests(true, done);
});

gulp.task('test:unit:auto', ['watch'], function(done) {
  runTests(false, done);
});
