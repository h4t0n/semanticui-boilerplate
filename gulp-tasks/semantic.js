/***************************************
          Set-up Semantic UI  Tasks
****************************************/

var
  gulp = require('gulp-help')(require('gulp'), {
    hideEmpty: true,
    hideDepsMessage: true
  }),
  path = require('path');
  paths = gulp.paths;


/***************************************
             Tasks
****************************************/

gulp.task('build-semantic', "Build Semantic UI", function(){

  gulp.task('inner-build-semantic',require(path.join(paths.root, paths.semantic, 'tasks/build')));

  return gulp.start('inner-build-semantic');
});

gulp.task('watch-semantic', "What Semantic UI Changes",function(){

  gulp.task('inner-watch-semantic',require(path.join(paths.root, paths.semantic, 'tasks/watch')));

  return gulp.start('inner-watch-semantic');
});
