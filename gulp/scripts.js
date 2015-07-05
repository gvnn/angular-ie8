var path = require('path'),
    gulp = require('gulp'),
    conf = require('./conf'),
    jshint = require('gulp-jshint'),
    size = require('gulp-size'),
    browserSync = require('browser-sync');


gulp.task('lint', function() {
  return gulp.src([path.join(conf.paths.src, '/**/*.js'), path.join(conf.paths.gulp, '/**/*.js')])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('scripts', function () {
  return gulp.src([path.join(conf.paths.src, '/**/*.js')])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(size());
});