'use strict';

const gulp = require('gulp'),
    path = require('path'),
    Concat = require('gulp-concat'),
    Sequence = require('gulp-sequence'),
    cssmin = require('gulp-cssmin'),
	merge = require('merge-stream'),
    jsmin = require('gulp-uglify');

const config = alias.require('@config'),
    Tools = alias.require('@tools'),
	SRC = config.src,
	DIST = config.dist;

// css folder to folder.css & folder.min.css
gulp.task('core.base:css', () => {
  const baseCssDir = SRC.base + '/css',
      dirNameList = Tools.getDirNameList(baseCssDir);
  let tasks = [];
  dirNameList.forEach(dirName => {
      let src = path.join(baseCssDir, dirName, '/**/*'),
          dist = DIST.path + '/base';
      let gA = gulp.src(src)
          .pipe(Concat(dirName + '.min.css'))
          .pipe(cssmin())
          .pipe(gulp.dest(dist));
      let gB = gulp.src(src)
          .pipe(Concat(dirName + '.css'))
          .pipe(gulp.dest(dist));

      tasks = [...tasks, gA, gB];
  });

  return merge.apply(null, tasks);
});

// js folder to folder.js & folder.min.js
gulp.task('core.base:js', () => {
  const baseJsDir = SRC.base + '/js',
      dirNameList = Tools.getDirNameList(baseJsDir);
  let tasks = [];
  dirNameList.forEach(dirName => {
	  const src = path.join(baseJsDir, dirName, '/**/*'),
	  	dist = DIST.path + '/base';
	  let gA = gulp.src(src)
		  .pipe(Concat(dirName + '.min.js'))
		  .pipe(jsmin())
		  .pipe(gulp.dest(dist));
	  let gB =  gulp.src(src)
		  .pipe(Concat(dirName + '.js'))
		  .pipe(gulp.dest(dist));

	  tasks = [...tasks, gA, gB];
  })

  return merge.apply(null, tasks);
});

gulp.task('core.base', ['core.base:css', 'core.base:js']);
