var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var wiredep = require('wiredep').stream;
var angularFilesort = require('gulp-angular-filesort');
var gulpInject = require('gulp-inject');

gulp.task('inject', ['scripts', 'styles'], function() {

  var injectStyles = gulp.src([
    path.join(conf.paths.tmp, '/serve/app/**/*.css')
  ], {read: false});

  var injectScripts = gulp.src([
    path.join(conf.paths.src, '/app/**/*.module.js'),
    path.join(conf.paths.src, '/app/**/*.js'),
    path.join('!' + conf.paths.src, '/app/**/*.spec.js'),
    path.join('!' + conf.paths.src, '/app/**/*.mock.js')
  ])
  .pipe(angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));

  var injectOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
    addRootSlash: false
  };

  return gulp.src(path.join(conf.paths.src, '/*.html'))
    .pipe(gulpInject(injectStyles, injectOptions))
    .pipe(gulpInject(injectScripts, injectOptions))
    .pipe(wiredep(conf.wiredep))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));

});
