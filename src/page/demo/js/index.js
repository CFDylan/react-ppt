import rConfig from './reveal.config.js';
import '../css/index.scss';
import P0 from './page_0'; // 首页
import P1 from './page_1'; // 目录
import P2 from './page_2'; // 第一章：布局
import P3 from './page_3'; // 布局：弹性盒子
import P4 from './page_4'; // 布局：12列
import P5 from './page_5'; // 第二章：分步浏览
import P6 from './page_6'; // 第三章：子页
import P7 from './page_7'; // 第四章：常用样式
import PEnd from './page_end';

const Page = React.createClass({
	getInitialState() {
		return {};
	},
	componentDidMount() {
		Reveal.initialize(rConfig);
		hljs.initHighlighting();
	},
	render() {
		return (
			<div className="slides">
				<P0 />
				<P1 />
				<P2 />
				<P3 />
				<P4 />
				<P5 />
				<P6 />
				<P7 />
				<PEnd />
			</div>
		);
	}
});
ReactDOM.render(<Page />, document.querySelector('#app'));
