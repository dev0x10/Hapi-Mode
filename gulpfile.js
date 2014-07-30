/**
 * Created by yauriedogawa on 7/29/14.
 */

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    minifyCSS = require('gulp-minify-css'),
    bowerFiles = require('main-bower-files');

var filePaths = {
  develop: {
    app: './app',
    assets: './app/assets',
    components: './app/components',
    libs: './app/libs',
    views: './app/views',
    server: ['**/*.js', 'server.js',
      '!node_modules/**', '!build/**',
      '!app/**', '!test/**',
      'package.json']
  },
  main: './server.js',
  build: {
    app: './build/app',
    assets: './build/app/assets',
    components: './build/app/components',
    libs: './build/app/libs',
    views: './build/app/views',
    server: './build'
  }
};

gulp.task('develop', ['nodemon', 'livereload']);
gulp.task('assets', ['css', 'images']);
gulp.task('build', ['clean', 'html', 'assets', 'js', 'cpServer']);

gulp.task('clean', function () {
  return gulp.src([filePaths.build.server, '!node_modules'], {read: false})
    .pipe(clean());
});

gulp.task('html', ['componentsHtml'], function () {
  return gulp.src([filePaths.develop.views + '/**/*.html'])
    .pipe(gulp.dest(filePaths.build.views));
});

gulp.task('componentsHtml', function () {
  return gulp.src([filePaths.develop.components + '/**/*.html'])
    .pipe(gulp.dest(filePaths.build.components));
});


gulp.task('css', function () {
  return gulp.src(filePaths.develop.assets + '/css/*.css')
    .pipe(minifyCSS({keepBreaks: true}))
    .pipe(gulp.dest(filePaths.build.assets + '/css'));
});

gulp.task('images', function () {
  return gulp.src(filePaths.develop.assets + '/img/**/*')
    .pipe(gulp.dest(filePaths.build.assets + '/img'));
});

gulp.task('js', ['componentsJs', 'bowerFiles', 'cpModernizr'], function () {
  return gulp.src(['./app/app.js', './app/routes.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(gulp.dest(filePaths.build.app));
});

gulp.task('componentsJs', function () {
  return gulp.src('./app/components/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest(filePaths.build.components));
});

gulp.task("bowerFiles", function(){
  return gulp.src(bowerFiles(), { base: filePaths.develop.libs })
    .pipe(gulp.dest(filePaths.build.libs));
});

gulp.task('cpModernizr', function () {
  return gulp.src(filePaths.develop.libs + '/modernizr/modernizr.js')
    .pipe(gulp.dest(filePaths.build.libs + '/modernizr'));
});

gulp.task('cpServer', function () {
  return gulp.src(filePaths.develop.server)
    .pipe(gulp.dest(filePaths.build.server));
});