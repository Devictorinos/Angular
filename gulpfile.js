var gulp = require('gulp');
var del  = require('del');
var uglify = require('gulp-uglify');

gulp.task('compress', function() {

    gulp.src('gulpTests/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('clean:foo', function(cb) {
    del([

        'foo/report.csv',
        'foo/**',
        '!foo/deploy.json'
    ], cb);
});

gulp.task('cleanFolders', ['clean:foo']);

