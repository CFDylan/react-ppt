'use strict';

const fs = require('fs'),
    path = require('path'),
    gutil = require('gulp-util'),
    root = alias.path('@root'),
    templates = alias.path('@templates');

let fileTree = {
    'src': {
        'base': {
            'css': {
                'vendor': {}
            },
            'img': {},
            'js': {
                'vendor': {}
            },
            'config.scss': ''
        },
        'page': {},
        'plugin': {}
    },
    'views_dev': {}
};
let T = {
    // 获取指定文件路径的，最后一级文件夹的名字
    getLastDirName(fullPath) {
        var dirPath = path.dirname(fullPath);
        return path.basename(dirPath);
    },
    // 获取指定目录下，子级文件夹名字集合
    getDirNameList(dirPath) {
        return fs.readdirSync(dirPath).filter(function(file) {
            return fs.statSync(path.join(dirPath, file)).isDirectory();
        });
    },
    getFileContent(filePath) {
        return fs.readFileSync(filePath, 'utf-8');
    },
    createFile(filePath, content) {
        fs.access(filePath, fs.F_OK, (err) => {
            if (err) { // file not exits
                fs.writeFile(filePath, content, (err2) => {
                    gutil.log(gutil.colors.green('>> ' + filePath + ' created!'));
                    if (err2) throw err;
                });
            }
        });
    },
    createDir(dirPath) {
        fs.access(dirPath, fs.F_OK, (err) => {
            if (err) { // floder not exits
                fs.mkdirSync(dirPath);
                gutil.log(gutil.colors.green('>> ' + dirPath + ' created!'));
            }
        });
    },
    createFileTree() {
        let self = T;
        (function fn(tree, basePath) {
            if (typeof tree === 'object') { // folder
                for (let dir in tree) {
                    let v = tree[dir],
                        curPath = path.join(basePath, dir);
                    if (typeof v === 'object') { // folder
                        self.createDir(curPath);
                        if (Object.keys(v).length > 0) { // not empty
                            fn(v, curPath + '/');
                        }
                    } else { // file
                        self.createFile(curPath, v);
                    }
                }
            } else { // file
                self.createFile(basePath + tree, v);
            }
            return;
        })(fileTree, root);
    },
    createPlugin(pluginName) {
        let self = T,
            name = pluginName;
        fileTree['src']['plugin'][name] = {
            img: {},
            'index.js': self.getFileContent(templates + '/plugin.js')
                .replace(/xxx/g, name)
                .replace(/Xxx/g, self.upperFirstLetter(name))
        };
        fileTree['src']['plugin'][name][name + '.scss'] = self.getFileContent(templates + '/plugin.scss')
            .replace(/xxx/g, name);

        self.createFileTree();
    },
    createPage(pageName) {
        let self = T,
            name = pageName;
        fileTree['src']['page'][name] = {
            img: {},
            js: {
                'index.js': self.getFileContent(templates + '/page.js')
                    .replace(/xxx/g, name).replace(/Xxx/g, self.upperFirstLetter(name)),
				'page_0.js': self.getFileContent(templates + '/sub_page_0.js'),
				'page_1.js': self.getFileContent(templates + '/sub_page_1.js'),
				'page_end.js': self.getFileContent(templates + '/sub_page_end.js'),
				'reveal.config.js': self.getFileContent(templates + '/reveal.config.js'),
            },
            css: {
                'index.scss': self.getFileContent(templates + '/page.scss').replace(/xxx/g, name)
            }
        };
        fileTree['views_dev'][name + '.html'] = self.getFileContent(templates + '/page.html').replace(/xxx/g, name);

        self.createFileTree();
    },
    upperFirstLetter(string) {
        string += '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    deepCopy(srcObj) {
        var class2type = {},
            toString = class2type.toString,
            rstObj = {};

        function type(obj) {
            return obj == null ? String(obj) :
                class2type[toString.call(obj)] || "object";
        }

        function isObject(obj) {
            return type(obj) == "object";
        }

        function isPlainObject(obj) {
            return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
        }

        (function extend(target, source, deep) {
            for (let key in source)
                if (deep && (isPlainObject(source[key]) || Array.isArray(source[key]))) {
                    if (isPlainObject(source[key]) && !isPlainObject(target[key]))
                        target[key] = {}
                    if (Array.isArray(source[key]) && !Array.isArray(target[key]))
                        target[key] = []
                    extend(target[key], source[key], deep)
                } else if (source[key] !== undefined) target[key] = source[key]
        })(rstObj, srcObj, true);
        return rstObj;
    }
};

module.exports = T;
