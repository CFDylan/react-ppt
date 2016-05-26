/*
 * @Author: dylan
 * @Date:   2015-11-12 15:44:00
 * @Last Modified by:   dylan
 * @Last Modified time: 2016-01-10 11:08:11
 */

'use strict';
const path = require('path'),
    fs = require('fs'),
    webpack = require('webpack'),
    config = alias.require('@config'),
	SRC = config.src,
	DIST = config.dist,
	pageName = config.pageName,
    Tools = alias.require('@tools'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");
// var md5 = config.md5 ? '_[chunkhash:5]' : '',
const md5 = '', // css && js 的 md5 交给gulp处理
    cssExtract = new ExtractTextPlugin('css', '[name]/index' + md5 + '.css');
let plugins = [cssExtract];
config.minify && plugins.push(new webpack.optimize.UglifyJsPlugin());

function getEntryMap(src) {
	let enteryMap = {};

    const jsDirList = pageName ? [pageName] : Tools.getDirNameList(src.page);

    jsDirList.forEach(name => {
        const entry = name,
            entryPath = path.join(src.page, name, 'js/index.js');
        enteryMap[entry] = entryPath;
    });
    return enteryMap;
};
module.exports = {
	entry: getEntryMap(SRC),
    output: {
        path: DIST.path, // 文件生成路径
        publicPath: DIST.publicPath, // html/css/js中，文件引用路径的基准
        filename: '[name]/index' + md5 + '.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: cssExtract.extract('css')
        }, {
            test: /\.scss$/,
            // loader: cssExtract.extract('css!compass?outputStyle=expanded')
            loader: cssExtract.extract('css!sass?outputStyle=expanded')
		}, {
	        test: /\.(jpg|jpeg|png|svg|gif)$/i,
	        loader: config.minify ?
				'my-url?limit=102400000&name=[path][name]' + md5 + '.[ext]' : 
				'my-url?limit=8192&name=[path][name]' + md5 + '.[ext]' // name=后面，是生成后的图片文件的 路径+名字
	    }, {
            test: /\.jsx?$/i,
            loader: 'babel',
            exclude:['./node_modules'],
            query: {
                presets: ['react', 'es2015'] // 执行环境：react, 如果需要支持es2015, 那需要npm install babel-preset-es2015 -D
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.scss'],
        alias: { // 路径配置
            'plugin': SRC.plugin,
            'base': SRC.base
        }
    },
    plugins: plugins
};
