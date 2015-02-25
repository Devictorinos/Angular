var gulp = require('gulp');
var del  = require('del');
var uglify = require('gulp-uglify');

gulp.task('uglify:js', function() {

    gulp.src('gulpTests/js/*.js')
    .pipe(uglify({mangle:{topLevel: true}}))
    .pipe(gulp.dest('dist'));
});

gulp.task('deault', function() {
  gulp.watch('gulpTests/js/*.js', ['uglify:js']);
});

