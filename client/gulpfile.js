var gulp = require('gulp'),
    concat = require('gulp-concat'),
    inject = require('gulp-inject'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglifyjs'),
    browserSync = require('browser-sync');

// plugins.jshint  = require('gulp-jshint');
// plugins.concat = require('gulp-concat');

gulp.task('hello', function () {
   console.log("hello gulp!");
});

gulp.task('sass', function () {
   return gulp.src('src/app/**/*.+(scss|sass)')
       .pipe(sass())
       .pipe(gulp.dest('src/app'))
       .pipe(browserSync.reload({stream: true}));
});

gulp.task('styles', function () {
   return gulp.src([
       'node_modules/bootstrap/dist/css/bootstrap.min.css'])
       // .pipe(concat('ext.styles.css'))
       // .pipe(uglify())
       .pipe(gulp.dest('src/app/ext/css'));
});

gulp.task('scripts', function () {
   return gulp.src([
       'node_modules/angular/angular.js',
       'node_modules/angular-route/angular-route.js',
       'node_modules/jquery/dist/jquery.min.js',
       'node_modules/bootstrap/dist/js/bootstrap.min.js'])
       // .pipe(concat('ext.lib.min.js'))
       // .pipe(uglify())
       .pipe(gulp.dest('src/app/ext/js'));
});

gulp.task('fonts', function () {
   return gulp.src('node_modules/bootstrap/dist/fonts/**/*')
       .pipe(gulp.dest('src/app/ext/fonts'));
});

gulp.task('index', ['sass', 'scripts', 'styles', 'fonts'],  function () {
   var target = gulp.src('src/index.html');
   var sources = gulp.src([
       'src/app/ext/js/jquery.min.js',
       'src/app/ext/js/angular.js',
       'src/app/ext/js/angular-route.js',
       'src/app/ext/js/bootstrap.min.js',
       'src/app/app.module.js',
       'src/app/**/**.js',
       'src/app/**/**.css'
   ], {read: false});

   return target.pipe(inject(sources, {relative: true}))
       .pipe(gulp.dest('src'));
});

gulp.task('browser-sync', function () {
   browserSync({
      server: {
         baseDir: 'src'
      },
      notify: false
   })
});

gulp.task('watch', ['index', 'browser-sync'], function () {
    gulp.watch('src/app/**/*.+(scss|sass)', ['index']);
    gulp.watch('src/app/**/*.js', ['index']);
    gulp.watch('src/**/*.html', browserSync.reload);
});