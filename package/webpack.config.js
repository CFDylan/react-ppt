'use strict';
import path from 'path';
import fs from 'fs';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import config, {src, dist, pageName} from './config';
import Tools from './tools';

const cssExtract = new ExtractTextPlugin('css', '[name]/index.css');
let plugins = [cssExtract];

function getEntryMap(src) {
	let enteryMap = {};

    const jsDirList = pageName ? [pageName] : Tools.getDirNameList(src.page);

    jsDirList.forEach(name => {
        const entry = name,
            entryPath = path.join(src.page, name, 'js/index.js');
        enteryMap[entry] = entryPath;
    });
    return enteryMap;
}

module.exports = {
	entry: getEntryMap(src),
    output: {
        path: dist.path, // 文件生成路径
        publicPath: dist.publicPath, // html/css/js中，文件引用路径的基准
        filename: '[name]/index.js'
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
	        loader: 'my-url?limit=8192&name=[path][name].[ext]' // name=后面，是生成后的图片文件的 路径+名字
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
            'plugin': src.plugin,
            'base': src.base
        }
    },
    plugins: plugins
};
