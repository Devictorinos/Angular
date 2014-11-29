var gulp       = require('gulp'),
    sass       = require('gulp-ruby-sass'),
    prefixer   = require('gulp-autoprefixer'),
    gulpif     = require('gulp-if'),
    revall     = require('gulp-rev-all'),
    glue       = require("gulp-sprite-glue"),
    minifyCSS  = require('gulp-minify-css'),
    rename     = require("gulp-rename"),
    clean      = require('gulp-clean'),
    connect    = require('gulp-connect'),
    livereload = require('gulp-livereload'),
    uglify     = require('gulp-uglify'),
    concat     = require('gulp-concat'),
    lr         = require('tiny-lr'),
    server     = lr(),
    sources    = {
        sass: 'src/styles/main.scss',
        js:   'src/scripts/*.js',
        production: 'production/**/*.*'
    };
    

/*SERVER TASK*/
gulp.task('server:reload', function(event) {
    return gulp.src(sources.production)
        .pipe(connect.reload());
});

gulp.task('server', function(event) {
    connect.server({
        root: 'production',
        port: 1987,
        livereload: true
    });
    // sets up a livereload that watches for any changes in the root
    gulp.watch(sources.production, ['server:reload']);
});


/* SASS TASK */
gulp.task('sass:compile', function() {
    return gulp.src('src/styles/*.scss')
    .pipe(sass({'sourcemap=none': true, style: 'expanded'}))
    .pipe(prefixer({browsers: ['last 20 versions']}))
    .pipe(gulp.dest('dest/styles'))
    .pipe(rename({suffix: '.min'} ))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dest/styles'));

});


gulp.task('copy:minified-css', ['sass:compile'],  function() {
    return gulp.src('dest/styles/*.min.css')
    .pipe(gulp.dest('production/css/'))  
   // .pipe(livereload());
   

});


gulp.task('watch:minified-css', function() {

    gulp.watch([sources.sass], ['copy:minified-css']);   
});

gulp.task('default', ['watch:minified-css', 'server']);


/* IMG SPRITE */
gulp.task('glue-sprite', function () {
    gulp.src('src/img/')
    .pipe(glue({
            css: 'dest/img',
            img: 'dest/img',
            scss: 'dest/img',
            html: 'dest/img',
            json: 'dest/img',
            less: 'dest/img',
            cocos2d: 'dest/img'
            
    }));

});



/*gulp.task('watch-sass', function() {
    // What to watch
   // var server = livereload();
    //gulp.run('server');
    gulp.watch([sources.sass], function() {
    // What to run
        gulp.run('copy-minified');
       
    });  
});
*/