const page = React.createClass({
	render() {
		return (
			<section>
				<h2>分步浏览</h2>
				<div>这是你一进来可以看到的内容。按<span className="cw"> → 或 ↓</span>, 浏览下一部分的内容。</div>
				<pre>
					<code>
						{
`<div className="fragment">带有 .fragment 这个className的，都会被分步展现</div>`							
						}
					</code>
				</pre>
				<div className="fragment">第2部分</div>
				<div className="fragment">第3部分</div>
				<div className="fragment">第4部分</div>
			</section>
		);
	}
});

module.exports = page;
