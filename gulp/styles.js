var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var browserSync = require('browser-sync');
var wiredep = require('wiredep').stream;
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  var sassOptions = {
    style: 'expanded'
  };

  return gulp.src([
    path.join(conf.paths.src, '/app/styles/main.scss')
  ])
    .pipe(wiredep(conf.wiredep))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions)).on('error', conf.errorHandler('Sass'))
    .pipe(autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')))
    .pipe(browserSync.reload({stream: true}));
});
