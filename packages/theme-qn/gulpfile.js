'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssmin = require('gulp-cssmin');
var salad = require('postcss-salad')(require('./salad.config.json'));
var rimraf = require('rimraf');

gulp.task('compile', function() {
  return gulp.src(['../theme-weike/src/*.css', './src/*.css'])
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});

gulp.task('copyfont', function() {
  return gulp.src('../theme-weike/src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/fonts'));
});

gulp.task('build', ['compile', 'copyfont'], function() {
  gulp.src('lib/**').pipe(gulp.dest('../../lib/theme-qn/'));

  rimraf('../../*.css', function() {
    console.log('已清除根目录中的多余css文件（用于不正常打包根目录出现冗余的css文件）');
  });
});
