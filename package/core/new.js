'use strict';

const gulp = require('gulp'),
	Tools = alias.require('@tools'),
	config = alias.require('@config'),
    pageName = config.pageName,
    pluginName = config.pluginName;

gulp.task('core.new', function() {
	if (!pageName && !pluginName) {
		throw '"gulp new" should be used like this: gulp new --{page, plugin} name';
	}
	let name = pageName || pluginName;
	if (name) {
		Tools[pageName ? 'createPage' : 'createPlugin'](name);
	}
});
