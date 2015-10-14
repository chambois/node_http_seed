var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function () {
    return gulp.src('./tests/*.js', {read: false})
      .pipe(mocha());
});

gulp.task('run', function() {
  nodemon({
    script: 'app.js',
  });
});
