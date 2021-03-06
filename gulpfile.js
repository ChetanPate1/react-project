'use strict';

let gulp =  require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('public/css/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('public/css/**/*.scss', ['sass']);
});
