const page = React.createClass({
	render() {
		return (
			<section>
				<section>
					<h2>子页</h2>
					<div className="tl">平时，我们都是按 → 到达下一个页面。现在你可以通过按<span className="cw"> ↓ </span>切到该页PPT的子页。</div>
					<pre>
						<code>
							{
	`<section>我是 section 标签，所以，我被判断为子页</section>`
							}
						</code>
					</pre>
				</section>
				<section>2/3 子页</section>
				<section>3/3 子页</section>
			</section>
		);
	}
});

module.exports = page;
