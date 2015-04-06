var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('dev/js/**/*')
});

gulp.task('html', function() {
  gulp.src('dev/*.html')
});

gulp.task('css', function() {
  gulp.src('dev/css/*.css')
});

gulp.task('watch', function() {
  gulp.watch('dev/js/**/*', ['js']);
  gulp.watch('dev/css/*.css', ['css']);
  gulp.watch(['dev/*.html',
    'dev/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('dev/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
