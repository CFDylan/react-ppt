## 搭环境
1. 下载完后，在项目的根目录，输入: `npm install`.
2. 使用的PPT插件（需要学习更多的，可以参考）：[https://github.com/hakimel/reveal.js](https://github.com/hakimel/reveal.js "reveal-js")


## 使用
1. 新建一个ppt。在项目根目录用命令行输入：

	`gulp new --page {pptName}`
2. 新建后，会生成 `src/page/[pptName]` 目录，我们主要看 js 目录下的文件：
	1. `index.js`, 入口文件
	2. `page_00.js`, PPT的第0页
	3. `page_10.js`, PPT的第1页
	4. `page_end.js`, PPT的最后1页
	5. `reveal.config.js`, PPT的配置
3. 那么，怎么让PPT可以在浏览器看呢？
	1. 方法一，手动编译： `gulp dev`。编译完之后，就可以打开`views_dev/[pptName].html`在浏览器查看效果了。
	2. 方法二，实时编译： `gulp dev -h` . 这个时候，浏览器会打开 `localhost:3000/views_dev/`. 然后，你输入你要看的PPT名字，如： `localhost:3000/views_dev/[pptName].html`

## 现有样式
具体可以查看 `package/templates/page.scss`，这里介绍常用的5个：

1. 标题：h1~h6
2. class="fragment" 的块，会被分块展示。
3. 弹性盒子布局： `.flex-layout` 及其一个弹性子元素 `.flex`
4. 经典12列布局： `.col-layout` 及其子元素 `.col-N`（N取值：1~12）
5. 凸显列表： `.nav-list`。列表的最后一项高亮，其它项灰色。

## 打印成 pdf
1. 加入 `print-pdf` 查询参数，然后访问，即可。例如：`http://localhost:3000/views_dev/demo.html?print-pdf`
2. 按快捷键：
    - window 下：Ctrl + P
    - Mac 下：Cmd + P
3. 选择
    - 边距：无
    - 选项：背景图形（打勾）

    ![image](http://ohazhz8mu.bkt.clouddn.com/QQ20161127-1@2x.png)