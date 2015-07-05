var path = require('path'),
    gulp = require('gulp'),
    conf = require('./conf'),
    del = require('del');

gulp.task('clean', function (done) {
    del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')], done);
});

gulp.task('build', ['clean', 'inject']);