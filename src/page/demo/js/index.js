import rConfig from './reveal.config.js';
import '../css/index.scss';

// url 的 search 中包含 print-pdf 参数，则启用打印 pdf 排版。
import pdfCss from '!raw!sass!../css/pdf.scss';
const search = window.location.search;
if (/\bprint-pdf\b/i.test(search)) {
    const head = document.querySelector('head'),
        style = document.createElement('style');
    style.innerHTML = pdfCss;
    head.appendChild(style);
}

const pagesReq = require.context('./', true, /^\.\/page_.*\.js$/);
// 按照字母升序依赖所有页面
const pages = pagesReq.keys().sort().map( pageName => {
    return pagesReq(pageName);
});


const Page = React.createClass({
	getInitialState() {
		return {};
	},
	componentDidMount() {
		Reveal.initialize(rConfig);
		hljs.initHighlighting();
		zoom.init();
	},
	render() {
		return (
			<div className="slides">
				{
                    pages.map( (page, index) => {
                        return React.createElement(page, {
                            key: `page_${index}`
                        });
                    })
                }
			</div>
		);
	}
});
ReactDOM.render(<Page />, document.querySelector('#app'));
