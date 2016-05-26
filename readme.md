## 说明
这是用 React.js + reveal.js，打造的PPT制作框架。你可以下载此项目，然后，双击运行 `views_dev/demo.html` 在浏览器上查看效果。或者，直接浏览[demo](http://120.76.140.150:4000/ppt "demo")

## 搭环境
1. 下载完后，在项目的根目录，输入: `npm install`.
2. 更灵活使用PPT插件：[reveal.js](http://lab.hakim.se/reveal-js/#/ "reveal-js")


## 使用
1. 新建一个ppt。在项目根目录用命令行输入：

	`gulp new --page {pptName}`
2. 新建后，会生成 `src/page/[pptName]` 目录，我们主要看 js 目录下的文件：
	1. `index.js`, 入口文件
	2. `page_0.js`, PPT的第0页
	3. `page_1.js`, PPT的第1页
	4. `page_end.js`, PPT的最后1页
	5. `reveal.config.js`, PPT的配置
3. 那么，怎么让PPT可以在浏览器看呢？
	1. 方法一，手动编译： `gulp dev`。编译完之后，就可以打开`views_dev/[pptName].html`在浏览器查看效果了。
	2. 方法二，实时编译： `gulp dev -h` . 这个时候，浏览器会打开 `localhost:3000`. 然后，你输入你要看的PPT名字，如： `localhost:3000/views_dev/[pptName].html`

## 现有样式
具体可以查看 `package/templates/page.scss`（可以自己拓展），这里介绍常用的5个：

1. 标题：h1~h6
2. class="fragment" 的块，会被分块展示。
3. 弹性盒子布局： `.box-layout` 及其一个弹性子元素 `.flex`
4. 经典12列布局： `.col-layout` 及其子元素 `.col-N`（N取值：1~12）
5. 凸显列表： `.nav-list`。列表的最后一项高亮，其它项灰色。
