/*
* @Author: dylan
* @Date:   2015-12-26 14:17:26
* @Last Modified by:   dylan
* @Last Modified time: 2016-01-10 10:22:09
*/
'use strict';

const path = require('path'),
    fs = require('fs'),
	yargs = require('yargs'),
	root = alias.path('@root'),
	proName = 'ppt';

// const vhost = 'localhost:4000'; // 该项目的虚拟主机名
const vhost = ''; // 该项目的虚拟主机名

const src =  {
	path: path.join(root, 'src'),
	page: path.join(root, 'src/page'),
    base: path.join(root, 'src/base'),
    plugin: path.join(root, 'src/plugin'),
    views: path.join(root, 'views_dev')
};

const devDist = {
    path: path.join(root, 'asset/dev'),
    publicPath: '/asset/dev/'
};

const proDist = {
    path: path.join(root, `asset/${proName}`),
	publicPath: `/asset/${proName}/`,
	views: path.join(root, 'views')
};

const argv = yargs.argv,
    type = argv._[0],
	watch = argv.w, // watch
    hot = argv.h, // watch + reload
	pageName = typeof argv.page === 'string' ? argv.page : '',
    pluginName = typeof argv.plugin === 'string' ? argv.plugin : '';
let dist = devDist,
    mode = 'dev',
	minify = true; // webpack 编译的时候，是否压缩

switch(type) {
    case 'dev':
	case 'init':
	case 'new':
    case 'base':
        break;
	// case 'build':
	// 	mode = 'production';
	// 	dist = proDist;
	// 	minify = true;
	// 	break;
	default:
		throw 'Error commond';
}
console.log('mode = ' + mode);
console.log('hot-reload = ' + !!hot);
console.log('minify = ' + !!minify);

const config = {
	proName: proName,
	vhost: vhost,
    type: type,
	watch: watch,
    hot: hot,
	pageName: pageName,
    pluginName: pluginName,
    minify: minify,
    // src
    src: src,
    // dist
    dist: dist,
    devDist: devDist,
	proDist: proDist
};
module.exports = config;
