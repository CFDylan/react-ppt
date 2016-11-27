const gulp = require('gulp'),
    path = require('path'),
    browserSync = require('browser-sync').create(),
	merge = require('merge-stream'),
    Concat = require('gulp-concat'),
    Sequence = require('gulp-sequence');

const config = alias.require('@config'),
    Tools = alias.require('@tools'),
	SRC = config.src,
	DIST = config.devDist;

// Static Server + watching
gulp.task('core.dev:hot', () => {
	let serveCfg = {
		ui: false,
		startPath: '/views_dev/demo.html'
	};
	if (typeof config.vhost === 'string' && config.vhost.trim().length > 1) {
		serveCfg.proxy = config.vhost;
	} else {
		serveCfg.server = './';
	}
    browserSync.init(serveCfg);

    gulp.watch([SRC.views + '/*.*', DIST.path + '/**/*']).on('change', browserSync.reload);
});

gulp.task('core.dev:copyImg', () => {
	let views = gulp.src(SRC.page + '/**/*.{png,jpg,jpeg,gif}')
    	.pipe(gulp.dest(DIST.path));
	let plugins = gulp.src(SRC.plugin + '/**/*.{png,jpg,jpeg,gif}')
		.pipe(gulp.dest(
			path.join(DIST.path, '/plugin')
		));
	return merge(views, plugins);
});

gulp.task('core.dev', (cb) => {
	let arr = config.hot ? ['core.dev:hot'] : [];
	arr = [...arr, ['core.dev:copyImg', 'core.webpack:main'], cb];

	Sequence.apply(null, arr);
});
