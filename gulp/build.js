var path = require('path'),
    gulp = require('gulp'),
    conf = require('./conf'),
    jshint = require('gulp-jshint'),
    del = require('del');

gulp.task('clean', function (done) {
    del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')], done);
});

gulp.task('lint', function() {
  return gulp.src([path.join(conf.paths.dist, '/**/*.js'), path.join(conf.paths.gulp, '/**/*.js')])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build', ['clean', 'lint']);