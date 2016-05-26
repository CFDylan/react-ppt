import rConfig from './reveal.config.js';
import '../css/index.scss';
import P0 from './page_0';
import P1 from './page_1';
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
				<PEnd />
			</div>
		);
	}
});
ReactDOM.render(<Page />, document.querySelector('#app'));
