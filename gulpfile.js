// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyHTML = require('gulp-minify-html');
var htmlmin = require('gulp-html-minifier');

// Lint Task
gulp.task('lint1', function() {
    return gulp.src(['views/js/main.js'])
         .pipe(jshint())
         .pipe(jshint.reporter('default'));
});

gulp.task('lint2', function() {
    return gulp.src(['js/perfmatters.js'])
         .pipe(jshint())
         .pipe(jshint.reporter('default'));
});

// Minify JS
gulp.task('scripts1', function() {
    return gulp.src(['views/js/main.js'])
         .pipe(uglify())
         .pipe(rename('main.min.js'))
         .pipe(gulp.dest('dist/views/zjs'));
});

// Minify JS
gulp.task('scripts2', function() {
    return gulp.src(['js/perfmatters.js'])
         .pipe(uglify())
         .pipe(rename('perfmatters.min.js'))
         .pipe(gulp.dest('dist/js'))
});

// minify html and css (if any)
gulp.task('minify-html1', function() {
  gulp.src(['views/pizza.html'] )
   .pipe(htmlmin({collapseWhitespace: true}))
   .pipe(gulp.dest('dist/views'));
});

// minify html and css (if any)
gulp.task('minify-html2', function() {
  gulp.src(['index.html'] )
   .pipe(minifyHTML())
   .pipe(gulp.dest('dist'));
});

// minify html and css (if any)
gulp.task('minify-html3', function() {
  gulp.src(['project-2048.html'] )
   .pipe(minifyHTML())
   .pipe(gulp.dest('dist'));
});

// minify html and css (if any)
gulp.task('minify-html4', function() {
  gulp.src(['project-mobile.html'] )
   .pipe(minifyHTML())
   .pipe(gulp.dest('dist'));
});

// minify html and css (if any)
gulp.task('minify-html5', function() {
  gulp.src(['project-webperf.html'] )
   .pipe(minifyHTML())
   .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('views/js/main.js', ['lint1', 'scripts1']);
});

// Default Task
// gulp.task('default', ['lint1', 'lint2', 'scripts1', 'scripts2', 'minify-html1', 'watch']);
gulp.task('default', ['scripts1','scripts2','minify-html1', 'minify-html2', 'minify-html3', 'minify-html4','minify-html5']);