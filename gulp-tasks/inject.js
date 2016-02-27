/***************************************
          Set-up Semantic Inject Tasks
****************************************/

var
  gulp = require('gulp-help')(require('gulp'), {
    hideEmpty: true,
    hideDepsMessage: true
  }),
  inject = require('gulp-inject'),
  wiredep = require('wiredep').stream,
  paths = gulp.paths;



gulp.task('inject', "Inject TBD", ['styles'], function () {

  var injectSemanticUI = gulp.src([
    paths.semantic + '/dist/**/*.css',
    paths.semantic + '/dist/**/*.js',
    '!' + paths.semantic + '/dist/**/*.min.css',
    '!' + paths.semantic + '/dist/semantic.css',
    '!' + paths.semantic + '/dist/**/*.min.js',
    '!' + paths.semantic + '/dist/semantic.js',
  ], {
    read: false
  });

  var injectSemanticUIOpt = {
    name: 'semantic'
  };

  var injectApp = gulp.src([
    paths.tmp + '/**/*.css',
    paths.app + '/**/*.js'
  ], {
    read: false
  });

  var injectAppOpt = {
    name: 'app',
    relative: false,
    ignorePath: [paths.src, paths.tmp + '/serve']
  };

  return gulp.src(paths.src + '/*.html')
    .pipe(inject(injectSemanticUI, injectSemanticUIOpt))
    .pipe(inject(injectApp, injectAppOpt))
    .pipe(wiredep())
    .pipe(gulp.dest(paths.tmp + '/serve'));
});
