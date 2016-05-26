/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/asset/dev/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _revealConfig = __webpack_require__(1);

	var _revealConfig2 = _interopRequireDefault(_revealConfig);

	__webpack_require__(4);

	var _page_ = __webpack_require__(5);

	var _page_2 = _interopRequireDefault(_page_);

	var _page_3 = __webpack_require__(6);

	var _page_4 = _interopRequireDefault(_page_3);

	var _page_5 = __webpack_require__(7);

	var _page_6 = _interopRequireDefault(_page_5);

	var _page_7 = __webpack_require__(8);

	var _page_8 = _interopRequireDefault(_page_7);

	var _page_9 = __webpack_require__(9);

	var _page_10 = _interopRequireDefault(_page_9);

	var _page_11 = __webpack_require__(10);

	var _page_12 = _interopRequireDefault(_page_11);

	var _page_13 = __webpack_require__(11);

	var _page_14 = _interopRequireDefault(_page_13);

	var _page_15 = __webpack_require__(12);

	var _page_16 = _interopRequireDefault(_page_15);

	var _page_end = __webpack_require__(13);

	var _page_end2 = _interopRequireDefault(_page_end);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 第三章：子页
	// 布局：12列
	// 第一章：布局
	// 首页


	var Page = React.createClass({
		displayName: 'Page',
		getInitialState: function getInitialState() {
			return {};
		},
		componentDidMount: function componentDidMount() {
			Reveal.initialize(_revealConfig2.default);
			hljs.initHighlighting();
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'slides' },
				React.createElement(_page_2.default, null),
				React.createElement(_page_4.default, null),
				React.createElement(_page_6.default, null),
				React.createElement(_page_8.default, null),
				React.createElement(_page_10.default, null),
				React.createElement(_page_12.default, null),
				React.createElement(_page_14.default, null),
				React.createElement(_page_16.default, null),
				React.createElement(_page_end2.default, null)
			);
		}
	}); // 第四章：常用样式
	// 第二章：分步浏览
	// 布局：弹性盒子
	// 目录

	ReactDOM.render(React.createElement(Page, null), document.querySelector('#app'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);
	// Full list of configuration options available at:
	// https://github.com/hakimel/reveal.js#configuration
	var config = {
	   controls: true, // Display controls in the bottom right corner
	   progress: false, // Display a presentation progress bar
	   history: true, // Push each slide change to the browser history
	   center: true, // Vertical centering of slides
	   width: 1200,
	   height: 700,
	   // Transition style
	   transition: 'convex', // none/fade/slide/convex/concave/zoom
	   // Display the page number of the current slide
	   slideNumber: false,
	   // Enable keyboard shortcuts for navigation
	   keyboard: true,
	   // Enable the slide overview mode
	   overview: true,
	   // Enables touch navigation on devices with touch input
	   touch: true,
	   // Loop the presentation
	   loop: false,
	   // Change the presentation direction to be RTL
	   rtl: false,
	   // Turns fragments on and off globally
	   fragments: true,
	   // Flags if the presentation is running in an embedded mode,
	   // i.e. contained within a limited portion of the screen
	   embedded: false,
	   // Flags if we should show a help overlay when the questionmark
	   // key is pressed
	   help: true,
	   // Flags if speaker notes should be visible to all viewers
	   showNotes: false,
	   // Number of milliseconds between automatically proceeding to the
	   // next slide, disabled when set to 0, this value can be overwritten
	   // by using a data-autoslide attribute on your slides
	   autoSlide: 0,
	   // Stop auto-sliding after user input
	   autoSlideStoppable: true,
	   // Enable slide navigation via mouse wheel
	   mouseWheel: false,
	   // Hides the address bar on mobile devices
	   hideAddressBar: true,
	   // Opens links in an iframe preview overlay
	   previewLinks: false,
	   // Transition speed
	   transitionSpeed: 'default', // default/fast/slow
	   // Transition style for full page slide backgrounds
	   backgroundTransition: 'default', // none/fade/slide/convex/concave/zoom
	   // Number of slides away from the current that are visible
	   viewDistance: 3,
	   // Parallax background image
	   parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"
	   // Parallax background size
	   parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px"
	   // Number of pixels to move the parallax background per slide
	   // - Calculated automatically unless specified
	   // - Set to 0 to disable movement along an axis
	   parallaxBackgroundHorizontal: null,
	   parallaxBackgroundVertical: null
	};

	module.exports = config;

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	var page = React.createClass({
		displayName: "page",
		render: function render() {
			return React.createElement(
				"section",
				null,
				React.createElement(
					"h1",
					null,
					"标题"
				),
				React.createElement(
					"h3",
					null,
					"描述"
				),
				React.createElement(
					"p",
					null,
					"—— 作者"
				)
			);
		}
	});

	module.exports = page;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	var page = React.createClass({
		displayName: "page",
		render: function render() {
			return React.createElement(
				"section",
				null,
				React.createElement(
					"h2",
					null,
					"What are here?"
				),
				React.createElement(
					"ol",
					null,
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ href: "#/2" },
							"第一部分：布局"
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ href: "#/5" },
							"第二部分：分步浏览"
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ href: "#/6" },
							"第三部分：子页"
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ href: "#/7" },
							"第四部分：常用样式"
						)
					)
				)
			);
		}
	});

	module.exports = page;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	var page = React.createClass({
		displayName: "page",
		render: function render() {
			return React.createElement(
				"section",
				null,
				React.createElement(
					"h2",
					null,
					"布局"
				),
				React.createElement(
					"ol",
					null,
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ href: "#/3" },
							"弹性盒子：box-layout"
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ href: "#/4" },
							"十二列：col-layout"
						)
					)
				)
			);
		}
	});

	module.exports = page;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	var page = React.createClass({
		displayName: "page",
		render: function render() {
			return React.createElement(
				"section",
				null,
				React.createElement(
					"h2",
					null,
					"布局：弹性盒子"
				),
				React.createElement(
					"div",
					{ className: "box-layout" },
					React.createElement(
						"div",
						null,
						"非弹性子元素"
					),
					React.createElement(
						"div",
						{ className: "flex" },
						React.createElement(
							"div",
							null,
							"弹性子元素"
						),
						React.createElement(
							"pre",
							null,
							React.createElement(
								"code",
								null,
								"<div className=\"box-layout\">\n\t<div>非弹性子元素</div>\n\t<div className=\"flex\">弹性子元素</div>\n</div>"
							)
						)
					)
				)
			);
		}
	});

	module.exports = page;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	var page = React.createClass({
		displayName: "page",
		render: function render() {
			return React.createElement(
				"section",
				null,
				React.createElement(
					"h2",
					null,
					"布局：12列"
				),
				React.createElement(
					"div",
					{ className: "col-layout" },
					React.createElement(
						"div",
						{ className: "col-4" },
						"4/12"
					),
					React.createElement(
						"div",
						{ className: "col-8" },
						React.createElement(
							"div",
							null,
							"8/12"
						),
						React.createElement(
							"pre",
							null,
							React.createElement(
								"code",
								null,
								"<div className=\"col-layout\">\n\t<div className=\"col-4\">4/12</div>\n\t<div className=\"col-8\">8/12</div>\n</div>"
							)
						)
					)
				),
				React.createElement(
					"div",
					{ className: "tl", style: {
							marginTop: '30px'
						} },
					"说明：子元素的col之和",
					React.createElement(
						"span",
						{ className: "cw" },
						"不大于"
					),
					"12."
				)
			);
		}
	});

	module.exports = page;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	var page = React.createClass({
		displayName: "page",
		render: function render() {
			return React.createElement(
				"section",
				null,
				React.createElement(
					"h2",
					null,
					"分步浏览"
				),
				React.createElement(
					"div",
					null,
					"这是你一进来可以看到的内容。按",
					React.createElement(
						"span",
						{ className: "cw" },
						" → 或 ↓"
					),
					", 浏览下一部分的内容。"
				),
				React.createElement(
					"pre",
					null,
					React.createElement(
						"code",
						null,
						"<div className=\"fragment\">带有 .fragment 这个className的，都会被分步展现</div>"
					)
				),
				React.createElement(
					"div",
					{ className: "fragment" },
					"第2部分"
				),
				React.createElement(
					"div",
					{ className: "fragment" },
					"第3部分"
				),
				React.createElement(
					"div",
					{ className: "fragment" },
					"第4部分"
				)
			);
		}
	});

	module.exports = page;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	var page = React.createClass({
		displayName: "page",
		render: function render() {
			return React.createElement(
				"section",
				null,
				React.createElement(
					"section",
					null,
					React.createElement(
						"h2",
						null,
						"子页"
					),
					React.createElement(
						"div",
						{ className: "tl" },
						"平时，我们都是按 → 到达下一个页面。现在你可以通过按",
						React.createElement(
							"span",
							{ className: "cw" },
							" ↓ "
						),
						"切到该页PPT的子页。"
					),
					React.createElement(
						"pre",
						null,
						React.createElement(
							"code",
							null,
							"<section>我是 section 标签，所以，我被判断为子页</section>"
						)
					)
				),
				React.createElement(
					"section",
					null,
					"2/3 子页"
				),
				React.createElement(
					"section",
					null,
					"3/3 子页"
				)
			);
		}
	});

	module.exports = page;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	var Page0 = React.createClass({
		displayName: "Page0",
		render: function render() {
			return React.createElement(
				"section",
				null,
				React.createElement(
					"ol",
					{ className: "nav-list" },
					React.createElement(
						"li",
						null,
						"标题"
					)
				),
				React.createElement(
					"div",
					null,
					React.createElement(
						"h1",
						null,
						"h1"
					),
					React.createElement(
						"h2",
						null,
						"h2"
					),
					React.createElement(
						"h3",
						null,
						"h3"
					),
					React.createElement(
						"h4",
						null,
						"h4"
					),
					React.createElement(
						"h5",
						null,
						"h5"
					),
					React.createElement(
						"h6",
						null,
						"h6"
					)
				)
			);
		}
	});
	var Page1 = React.createClass({
		displayName: "Page1",
		render: function render() {
			return React.createElement(
				"section",
				null,
				React.createElement(
					"ol",
					{ className: "nav-list" },
					React.createElement(
						"li",
						null,
						"标题"
					),
					React.createElement(
						"li",
						null,
						"导航列表"
					)
				),
				React.createElement(
					"div",
					{ className: "col-layout" },
					React.createElement(
						"ul",
						{ className: "nav-list col-4" },
						React.createElement(
							"li",
							null,
							"我共一个"
						)
					),
					React.createElement(
						"ul",
						{ className: "nav-list col-4" },
						React.createElement(
							"li",
							null,
							"我是第1/2个"
						),
						React.createElement(
							"li",
							null,
							"我是第2/2个"
						)
					),
					React.createElement(
						"ul",
						{ className: "nav-list col-4" },
						React.createElement(
							"li",
							null,
							"我是第1/3个"
						),
						React.createElement(
							"li",
							null,
							"我是第2/3个"
						),
						React.createElement(
							"li",
							null,
							"我是第3/3个"
						)
					)
				),
				React.createElement(
					"pre",
					null,
					React.createElement(
						"code",
						null,
						"<ul className=\"nav-list\">\n\t<li>我是第1/3个</li>\n\t<li>我是第2/3个</li>\n\t<li>我是第3/3个</li>\n</ul>"
					)
				)
			);
		}
	});
	var Page2 = React.createClass({
		displayName: "Page2",
		render: function render() {
			return React.createElement(
				"section",
				null,
				React.createElement(
					"ol",
					{ className: "nav-list" },
					React.createElement(
						"li",
						null,
						"标题"
					),
					React.createElement(
						"li",
						null,
						"导航列表"
					),
					React.createElement(
						"li",
						null,
						"凸显"
					)
				),
				React.createElement(
					"div",
					null,
					"这是一个凸显的颜色：",
					React.createElement(
						"span",
						{ className: "cw" },
						"红色"
					)
				),
				React.createElement(
					"pre",
					null,
					React.createElement(
						"code",
						null,
						"<div>这是一个凸显的颜色：<span className=\"cw\">红色</span></div>"
					)
				)
			);
		}
	});
	var page = React.createClass({
		displayName: "page",
		render: function render() {
			return React.createElement(
				"section",
				null,
				React.createElement(
					"h2",
					null,
					"常用样式"
				),
				React.createElement(Page0, null),
				React.createElement(Page1, null),
				React.createElement(Page2, null)
			);
		}
	});

	module.exports = page;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	var page = React.createClass({
		displayName: "page",
		render: function render() {
			return React.createElement(
				"section",
				{ className: "tl" },
				React.createElement(
					"h1",
					null,
					"THE END"
				),
				React.createElement(
					"div",
					null,
					"参考资料"
				),
				React.createElement(
					"ul",
					null,
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ href: "xxx", target: "_blank" },
							"参考资料1"
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ href: "xxx", target: "_blank" },
							"参考资料2"
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ href: "xxx", target: "_blank" },
							"参考资料3"
						)
					)
				)
			);
		}
	});

	module.exports = page;

/***/ }
/******/ ]);