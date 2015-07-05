var path = require('path'),
  gulp = require('gulp'),
  conf = require('./conf'),
  browserSync = require('browser-sync'),
  wiredep = require('wiredep').stream,
  sourcemaps = require('gulp-sourcemaps'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
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
    .pipe(browserSync.reload({ stream: true }));
});