import './showcode.scss';

const Showcode = React.createClass({
	getInitialState() {
		return {};
	},
	render() {
		const p = this.props,
			s = this.state;
		let props = {
				className: `react-xxx ${p.className || ''}`
			};
		p.style && (props.style = p.style);
		return (
			<pre {...props}>
				<code>{p.children}</code>
			</pre>
		);
	}
});

module.exports = Showcode;
