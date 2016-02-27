/***************************************
          Set-up Semantic Styles Tasks
****************************************/

var
  gulp = require('gulp-help')(require('gulp'), {
    hideEmpty: true,
    hideDepsMessage: true
  }),
  inject = require('gulp-inject'),
  paths = gulp.paths,
  less = require('gulp-less'),
  del = require('del');

gulp.task('clean-temp-css', function () {

  del(paths.tmp + '/**/*.css');

});

gulp.task('styles', 'Prepare styles', ['clean-temp-css'], function () {

  gulp.src([
      paths.src + '/**/*.css',
      paths.src + '/**/*.less'
    ])
    .pipe(less())
    .pipe(gulp.dest(paths.tmp + '/serve'));


});
