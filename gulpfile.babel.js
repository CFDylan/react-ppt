/*
 *    Steps
 * 1. Rename your gulpfile.js to gulpfile.babel.js
 * 2. Add babel to your package.json (npm install -D babel-core)
 * 3. Start writing ES6 in your gulpfile!
 */

 const gulp = require('gulp'),
 	Alias = require('require-alias'),
 	requireDir = require('require-dir');
 global.alias = new Alias({
 	root: __dirname,
 	aliases: {
 		'@root': '/',
 		'@config': '/package/config.js',
 		'@tools': '/package/tools.js',
 		'@templates': '/package/templates'
 	}
 });

 requireDir('./package/core', {recurse: false}); // 不递归往文件夹里继续找

gulp.task('base', ['core.base']);
gulp.task('dev', ['core.dev']);
gulp.task('new', ['core.new']);
