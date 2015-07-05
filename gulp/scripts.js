var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var jshint = require('gulp-jshint');
var size = require('gulp-size');
var jscs = require('gulp-jscs');
var browserSync = require('browser-sync');

gulp.task('lint', function() {
  return gulp.src([
      path.join(conf.paths.src, '/**/*.js'),
      path.join(conf.paths.gulp, '/**/*.js')
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jscs());
});

gulp.task('scripts', function() {
  return gulp.src([path.join(conf.paths.src, '/**/*.js')])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jscs())
    .pipe(browserSync.reload({stream: true}))
    .pipe(size());
});
