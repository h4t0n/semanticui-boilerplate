/***************************************
          Set-up Server  Tasks
****************************************/

var
  gulp = require('gulp-help')(require('gulp'), {
    hideEmpty: true,
    hideDepsMessage: true
  }),
  paths = gulp.paths,
  browserSync = require('browser-sync').create();

function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = {
    '/semantic': 'semantic',
    '/bower_components': 'bower_components',
  };


  browserSync.init({
    files : files, // watch files to reaload
    startPath: '/',
    server: {
      baseDir: baseDir,
      routes: routes,
      index: 'index.html'
    },
    browser: browser,
  });

}

gulp.task('serve', 'Serve files TBD', ['watch'], function () {
  browserSyncInit([
      paths.tmp + '/serve',
      paths.src
    ], [
      paths.tmp + '/serve/**/*.*',
      paths.src + '/**/*.*'
    ],
    'google chrome');
});
