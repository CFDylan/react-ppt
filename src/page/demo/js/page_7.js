const Page0 = React.createClass({
	render() {
		return (
			<section>
				<ol className="nav-list">
					<li>标题</li>
				</ol>
				<div>
					<h1>h1</h1>
					<h2>h2</h2>
					<h3>h3</h3>
					<h4>h4</h4>
					<h5>h5</h5>
					<h6>h6</h6>
				</div>
			</section>
		);
	}
});
const Page1 = React.createClass({
	render() {
		return (
			<section>
				<ol className="nav-list">
					<li>标题</li>
					<li>导航列表</li>
				</ol>
				<div className="col-layout">
					<ul className="nav-list col-4">
						<li>我共一个</li>
					</ul>
					<ul className="nav-list col-4">
						<li>我是第1/2个</li>
						<li>我是第2/2个</li>
					</ul>
					<ul className="nav-list col-4">
						<li>我是第1/3个</li>
						<li>我是第2/3个</li>
						<li>我是第3/3个</li>
					</ul>
				</div>

				<pre>
					<code>
						{
`<ul className="nav-list">
	<li>我是第1/3个</li>
	<li>我是第2/3个</li>
	<li>我是第3/3个</li>
</ul>`
						}
					</code>
				</pre>
			</section>
		);
	}
});
const Page2 = React.createClass({
	render() {
		return (
			<section>
				<ol className="nav-list">
					<li>标题</li>
					<li>导航列表</li>
					<li>凸显</li>
				</ol>
				<div>这是一个凸显的颜色：<span className="cw">红色</span></div>

				<pre>
					<code>
						{
`<div>这是一个凸显的颜色：<span className="cw">红色</span></div>`
						}
					</code>
				</pre>
			</section>
		);
	}
});
const page = React.createClass({
	render() {
		return (
			<section>
				<h2>常用样式</h2>
				<Page0 />
				<Page1 />
				<Page2 />
			</section>
		);
	}
});

module.exports = page;
