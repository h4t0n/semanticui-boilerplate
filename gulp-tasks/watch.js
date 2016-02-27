

var gulp = require('gulp-help')(require('gulp'), {
    hideEmpty: true,
    hideDepsMessage: true
  }),
  watch = require('gulp-watch'),
  paths = gulp.paths;

gulp.task('watch', 'Watch for file changes', ['inject'], function () {

  gulp.start('watch-semantic');

  watch([
    paths.src + '/**/*.html',
    paths.src + '/**/*.less',
    paths.src + '/**/*.css',
    paths.src + '/**/*.js',
    paths.semantic + '/dist/**/*.{js|css}',
    'bower.json'
  ], function(){
    gulp.start('inject');
  });


});
