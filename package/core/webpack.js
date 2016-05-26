const gulp = require('gulp'),
	config = alias.require('@config'),
	Sequence = require('gulp-sequence'),
	gulpWebpack = require('gulp-webpack'),
	DIST = config.dist;

gulp.task('core.webpack:main', (cb) => {
	let webpackConfig = require('../webpack.config.js');
	if (config.hot || config.watch) {
		webpackConfig.watch = true;
	}
	return gulp.src('')
		.pipe(gulpWebpack(webpackConfig))
		.pipe(gulp.dest(DIST.path));
});
gulp.task('core.webpack', (cb) => {
	Sequence('core.webpack:main', cb);
});
