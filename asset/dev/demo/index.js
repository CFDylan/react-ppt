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
/******/ 	__webpack_require__.p = "../asset/dev/";

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

	var _pdf = __webpack_require__(15);

	var _pdf2 = _interopRequireDefault(_pdf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var search = window.location.search;

	// url 的 search 中包含 print-pdf 参数，则启用打印 pdf 排版。

	if (/\bprint-pdf\b/i.test(search)) {
		var head = document.querySelector('head'),
		    style = document.createElement('style');
		style.innerHTML = _pdf2.default;
		head.appendChild(style);
	}

	var pagesReq = __webpack_require__(6);
	// 按照字母升序依赖所有页面
	var pages = pagesReq.keys().sort().map(function (pageName) {
		return pagesReq(pageName);
	});

	var Page = React.createClass({
		displayName: 'Page',
		getInitialState: function getInitialState() {
			return {};
		},
		componentDidMount: function componentDidMount() {
			Reveal.initialize(_revealConfig2.default);
			hljs.initHighlighting();
			zoom.init();
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'slides' },
				pages.map(function (page, index) {
					return React.createElement(page, {
						key: 'page_' + index
					});
				})
			);
		}
	});
	ReactDOM.render(React.createElement(Page, null), document.querySelector('#app'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(2);

	// Full list of configuration options available at:
	// https://github.com/hakimel/reveal.js#configuration
	exports.default = {
	    // Display controls in the bottom right corner
	    controls: true,

	    // Display a presentation progress bar
	    progress: false,

	    // Display the page number of the current slide
	    slideNumber: false,

	    // Push each slide change to the browser history
	    history: true,

	    // Enable keyboard shortcuts for navigation
	    keyboard: true,

	    // Enable the slide overview mode
	    overview: true,

	    // Vertical centering of slides
	    center: true,

	    // Enables touch navigation on devices with touch input
	    touch: true,

	    // Loop the presentation
	    loop: false,

	    // Change the presentation direction to be RTL
	    rtl: false,

	    // Randomizes the order of slides each time the presentation loads
	    shuffle: false,

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

	    // Use this method for navigation when auto-sliding
	    autoSlideMethod: Reveal.navigateNext,

	    // Enable slide navigation via mouse wheel
	    mouseWheel: false,

	    // Hides the address bar on mobile devices
	    hideAddressBar: true,

	    // Opens links in an iframe preview overlay
	    previewLinks: false,

	    // Transition style
	    transition: 'default', // none/fade/slide/convex/concave/zoom

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
				{ className: "tl" },
				React.createElement(
					"h1",
					null,
					"THE END"
				),
				React.createElement(
					"div",
					null,
					"\u53C2\u8003\u8D44\u6599"
				),
				React.createElement(
					"div",
					{ className: "col-layout" },
					React.createElement(
						"ul",
						{ className: "col-6" },
						React.createElement(
							"li",
							null,
							"\u300AHTTP \u6743\u5A01\u6307\u5357\u300B"
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "http://blog.csdn.net/hguisu/article/details/8608888", target: "_blank" },
								"HTTP\u8BE6\u89E3(3)-http1.0 \u548Chttp1.1 \u533A\u522B"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "http://mrpeak.cn/blog/http2/", target: "_blank" },
								"HTTP 2.0\u7684\u90A3\u4E9B\u4E8B"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "https://www.zhihu.com/question/34074946", target: "_blank" },
								"HTTP/2.0 \u76F8\u6BD41.0\u6709\u54EA\u4E9B\u91CD\u5927\u6539\u8FDB\uFF1F"
							)
						)
					),
					React.createElement(
						"ul",
						{ className: "col-6" },
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "http://www.jianshu.com/p/52d86558ca57/comments/3560156", target: "_blank" },
								"\u9762\u8BD5\u65F6\u5982\u4F55\u4F18\u96C5\u7684\u8C08\u8BBAHTTP\uFF0F1.0\uFF0F1.1\uFF0F2.0"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "http://www.alloyteam.com/2016/03/discussion-on-web-caching/", target: "_blank" },
								"\u6D45\u8C08Web\u7F13\u5B58"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "https://my.oschina.net/ososchina/blog/494074", target: "_blank" },
								"HTTP 304/200(from cache) \u9759\u6001\u8D44\u6E90\u7F13\u5B58\u539F\u7406"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "http://www.ruanyifeng.com/blog/2016/06/dns.html", target: "_blank" },
								"DNS \u539F\u7406\u5165\u95E8"
							)
						)
					)
				)
			);
		}
	});

	module.exports = page;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./page_00.js": 7,
		"./page_10.js": 8,
		"./page_20.js": 9,
		"./page_30.js": 10,
		"./page_40.js": 11,
		"./page_50.js": 12,
		"./page_60.js": 13,
		"./page_70.js": 14,
		"./page_end.js": 5
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 6;


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
					"h1",
					null,
					"\u6807\u9898"
				),
				React.createElement(
					"h3",
					null,
					"\u63CF\u8FF0"
				),
				React.createElement(
					"p",
					null,
					"\u2014\u2014 \u4F5C\u8005"
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
							"\u7B2C\u4E00\u90E8\u5206\uFF1A\u5E03\u5C40"
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ href: "#/5" },
							"\u7B2C\u4E8C\u90E8\u5206\uFF1A\u5206\u6B65\u6D4F\u89C8"
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ href: "#/6" },
							"\u7B2C\u4E09\u90E8\u5206\uFF1A\u5B50\u9875"
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ href: "#/7" },
							"\u7B2C\u56DB\u90E8\u5206\uFF1A\u5E38\u7528\u6837\u5F0F"
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
					"\u5E03\u5C40"
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
							"\u5F39\u6027\u76D2\u5B50\uFF1Abox-layout"
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ href: "#/4" },
							"\u5341\u4E8C\u5217\uFF1Acol-layout"
						)
					)
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
					"\u5E03\u5C40\uFF1A\u5F39\u6027\u76D2\u5B50"
				),
				React.createElement(
					"div",
					{ className: "box-layout" },
					React.createElement(
						"div",
						null,
						"\u975E\u5F39\u6027\u5B50\u5143\u7D20"
					),
					React.createElement(
						"div",
						{ className: "flex" },
						React.createElement(
							"div",
							null,
							"\u5F39\u6027\u5B50\u5143\u7D20"
						),
						React.createElement(
							"pre",
							null,
							React.createElement(
								"code",
								null,
								"<div className=\"box-layout\">\n\t<div>\u975E\u5F39\u6027\u5B50\u5143\u7D20</div>\n\t<div className=\"flex\">\u5F39\u6027\u5B50\u5143\u7D20</div>\n</div>"
							)
						)
					)
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
					"h2",
					null,
					"\u5E03\u5C40\uFF1A12\u5217"
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
					"\u8BF4\u660E\uFF1A\u5B50\u5143\u7D20\u7684col\u4E4B\u548C",
					React.createElement(
						"span",
						{ className: "cw" },
						"\u4E0D\u5927\u4E8E"
					),
					"12."
				)
			);
		}
	});

	module.exports = page;

/***/ },
/* 12 */
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
					"\u5206\u6B65\u6D4F\u89C8"
				),
				React.createElement(
					"div",
					null,
					"\u8FD9\u662F\u4F60\u4E00\u8FDB\u6765\u53EF\u4EE5\u770B\u5230\u7684\u5185\u5BB9\u3002\u6309",
					React.createElement(
						"span",
						{ className: "cw" },
						" \u2192 \u6216 \u2193"
					),
					", \u6D4F\u89C8\u4E0B\u4E00\u90E8\u5206\u7684\u5185\u5BB9\u3002"
				),
				React.createElement(
					"pre",
					null,
					React.createElement(
						"code",
						null,
						"<div className=\"fragment\">\u5E26\u6709 .fragment \u8FD9\u4E2AclassName\u7684\uFF0C\u90FD\u4F1A\u88AB\u5206\u6B65\u5C55\u73B0</div>"
					)
				),
				React.createElement(
					"div",
					{ className: "fragment" },
					"\u7B2C2\u90E8\u5206"
				),
				React.createElement(
					"div",
					{ className: "fragment" },
					"\u7B2C3\u90E8\u5206"
				),
				React.createElement(
					"div",
					{ className: "fragment" },
					"\u7B2C4\u90E8\u5206"
				)
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
				null,
				React.createElement(
					"section",
					null,
					React.createElement(
						"h2",
						null,
						"\u5B50\u9875"
					),
					React.createElement(
						"div",
						{ className: "tl" },
						"\u5E73\u65F6\uFF0C\u6211\u4EEC\u90FD\u662F\u6309 \u2192 \u5230\u8FBE\u4E0B\u4E00\u4E2A\u9875\u9762\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u901A\u8FC7\u6309",
						React.createElement(
							"span",
							{ className: "cw" },
							" \u2193 "
						),
						"\u5207\u5230\u8BE5\u9875PPT\u7684\u5B50\u9875\u3002"
					),
					React.createElement(
						"pre",
						null,
						React.createElement(
							"code",
							null,
							"<section>\u6211\u662F section \u6807\u7B7E\uFF0C\u6240\u4EE5\uFF0C\u6211\u88AB\u5224\u65AD\u4E3A\u5B50\u9875</section>"
						)
					)
				),
				React.createElement(
					"section",
					null,
					"2/3 \u5B50\u9875"
				),
				React.createElement(
					"section",
					null,
					"3/3 \u5B50\u9875"
				)
			);
		}
	});

	module.exports = page;

/***/ },
/* 14 */
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
						"\u6807\u9898"
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
						"\u6807\u9898"
					),
					React.createElement(
						"li",
						null,
						"\u5BFC\u822A\u5217\u8868"
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
							"\u6211\u5171\u4E00\u4E2A"
						)
					),
					React.createElement(
						"ul",
						{ className: "nav-list col-4" },
						React.createElement(
							"li",
							null,
							"\u6211\u662F\u7B2C1/2\u4E2A"
						),
						React.createElement(
							"li",
							null,
							"\u6211\u662F\u7B2C2/2\u4E2A"
						)
					),
					React.createElement(
						"ul",
						{ className: "nav-list col-4" },
						React.createElement(
							"li",
							null,
							"\u6211\u662F\u7B2C1/3\u4E2A"
						),
						React.createElement(
							"li",
							null,
							"\u6211\u662F\u7B2C2/3\u4E2A"
						),
						React.createElement(
							"li",
							null,
							"\u6211\u662F\u7B2C3/3\u4E2A"
						)
					)
				),
				React.createElement(
					"pre",
					null,
					React.createElement(
						"code",
						null,
						"<ul className=\"nav-list\">\n\t<li>\u6211\u662F\u7B2C1/3\u4E2A</li>\n\t<li>\u6211\u662F\u7B2C2/3\u4E2A</li>\n\t<li>\u6211\u662F\u7B2C3/3\u4E2A</li>\n</ul>"
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
						"\u6807\u9898"
					),
					React.createElement(
						"li",
						null,
						"\u5BFC\u822A\u5217\u8868"
					),
					React.createElement(
						"li",
						null,
						"\u51F8\u663E"
					)
				),
				React.createElement(
					"div",
					null,
					"\u8FD9\u662F\u4E00\u4E2A\u51F8\u663E\u7684\u989C\u8272\uFF1A",
					React.createElement(
						"span",
						{ className: "cw" },
						"\u7EA2\u8272"
					)
				),
				React.createElement(
					"pre",
					null,
					React.createElement(
						"code",
						null,
						"<div>\u8FD9\u662F\u4E00\u4E2A\u51F8\u663E\u7684\u989C\u8272\uFF1A<span className=\"cw\">\u7EA2\u8272</span></div>"
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
					"\u5E38\u7528\u6837\u5F0F"
				),
				React.createElement(Page0, null),
				React.createElement(Page1, null),
				React.createElement(Page2, null)
			);
		}
	});

	module.exports = page;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "/**\n * This stylesheet is used to print reveal.js\n * presentations to PDF.\n *\n * https://github.com/hakimel/reveal.js#pdf-export\n */\n* {\n  -webkit-print-color-adjust: exact; }\n\nbody {\n  margin: 0 auto !important;\n  border: 0;\n  padding: 0;\n  float: none !important;\n  overflow: visible; }\n\nhtml {\n  width: 100%;\n  height: 100%;\n  overflow: visible; }\n\n/* Remove any elements not needed in print. */\n.nestedarrow,\n.reveal .controls,\n.reveal .progress,\n.reveal .playback,\n.reveal.overview,\n.fork-reveal,\n.share-reveal,\n.state-background {\n  display: none !important; }\n\nh1, h2, h3, h4, h5, h6 {\n  text-shadow: 0 0 0 #000 !important; }\n\n.reveal pre code {\n  overflow: hidden !important;\n  font-family: Courier, 'Courier New', monospace !important; }\n\nul, ol, div, p {\n  visibility: visible;\n  position: static;\n  width: auto;\n  height: auto;\n  display: block;\n  overflow: visible;\n  margin: auto; }\n\n.reveal {\n  width: auto !important;\n  height: auto !important;\n  overflow: hidden !important; }\n\n.reveal .slides {\n  position: static;\n  width: 100%;\n  height: auto;\n  left: auto;\n  top: auto;\n  margin: 0 !important;\n  padding: 0 !important;\n  overflow: visible;\n  display: block;\n  -webkit-perspective: none;\n  -moz-perspective: none;\n  -ms-perspective: none;\n  perspective: none;\n  -webkit-perspective-origin: 50% 50%;\n  /* there isn't a none/auto value but 50-50 is the default */\n  -moz-perspective-origin: 50% 50%;\n  -ms-perspective-origin: 50% 50%;\n  perspective-origin: 50% 50%; }\n\n.reveal .slides section {\n  page-break-after: always !important;\n  visibility: visible !important;\n  position: relative !important;\n  display: block !important;\n  position: relative !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  box-sizing: border-box !important;\n  min-height: 1px;\n  opacity: 1 !important;\n  -webkit-transform-style: flat !important;\n  -moz-transform-style: flat !important;\n  -ms-transform-style: flat !important;\n  transform-style: flat !important;\n  -webkit-transform: none !important;\n  -moz-transform: none !important;\n  -ms-transform: none !important;\n  transform: none !important; }\n\n.reveal section.stack {\n  margin: 0 !important;\n  padding: 0 !important;\n  page-break-after: avoid !important;\n  height: auto !important;\n  min-height: auto !important; }\n\n.reveal img {\n  box-shadow: none; }\n\n.reveal .roll {\n  overflow: visible;\n  line-height: 1em; }\n\n/* Slide backgrounds are placed inside of their slide when exporting to PDF */\n.reveal section .slide-background {\n  display: block !important;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: -1; }\n\n/* All elements should be above the slide-background */\n.reveal section > * {\n  position: relative;\n  z-index: 1; }\n\n/* Display slide speaker notes when 'showNotes' is enabled */\n.reveal .speaker-notes-pdf {\n  display: block;\n  width: 100%;\n  max-height: none;\n  left: auto;\n  top: auto;\n  z-index: 100; }\n\n/* Display slide numbers when 'slideNumber' is enabled */\n.reveal .slide-number-pdf {\n  display: block;\n  position: absolute;\n  font-size: 14px; }\n"

/***/ }
/******/ ]);