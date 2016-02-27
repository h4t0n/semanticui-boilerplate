
var gulp = require('gulp'),
  path = require('path');

gulp.paths = {
  root : __dirname,
  src: 'src',
  semantic: 'semantic',
  tmp: '.tmp',
  app: 'src/app'
};


require('require-dir')('./gulp-tasks');
