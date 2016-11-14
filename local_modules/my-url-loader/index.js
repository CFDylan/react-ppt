/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
const urlLoader = require("url-loader");

module.exports = function(content) {

    let rp = this.resourcePath.replace(/\\/g, '/'),
        contextStr = '';

    if(rp.indexOf('/src/page/') > -1) {
        contextStr = './src/page/';
    }
    else if(rp.indexOf('/src/plugin/') > -1) {
        contextStr = './src/';
    }
    contextStr && (this.query += '&context=' + contextStr);

    return urlLoader.call(this, content);
};

module.exports.raw = true;
