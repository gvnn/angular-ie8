var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var jshint = require('gulp-jshint');
var size = require('gulp-size');
var jscs = require('gulp-jscs');
var browserSync = require('browser-sync');
var noop = function () {};
var stylish = require('gulp-jscs-stylish');

gulp.task('lint', function() {
  return gulp.src([
      path.join(conf.paths.src, '/**/*.js'),
      path.join(conf.paths.gulp, '/**/*.js')
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jscs({
        fix: true
    }))
    .on('error', noop) // don't stop on error
    .pipe(stylish());  // log style errors
});

gulp.task('scripts', function() {
  return gulp.src([path.join(conf.paths.src, '/**/*.js')])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jscs())
    .on('error', noop) // don't stop on error
    .pipe(stylish())  // log style errors
    .pipe(browserSync.reload({stream: true}))
    .pipe(size());
});