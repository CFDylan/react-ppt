const page = React.createClass({
	render() {
		return (
			<section>
				<h2>布局：12列</h2>
				<div className="col-layout">
					<div className="col-4">4/12</div>
					<div className="col-8">
						<div>8/12</div>
						<pre>
							<code>
								{
`<div className="col-layout">
	<div className="col-4">4/12</div>
	<div className="col-8">8/12</div>
</div>`
								}
							</code>
						</pre>
					</div>
				</div>
				<div className="tl" style={{
						marginTop: '30px'
					}}>说明：子元素的col之和<span className="cw">不大于</span>12.</div>
			</section>
		);
	}
});

module.exports = page;
