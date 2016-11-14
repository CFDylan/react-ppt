const page = React.createClass({
	render() {
		return (
			<section>
				<h2>布局：弹性盒子</h2>
				<div className="box-layout">
					<div>非弹性子元素</div>
					<div className="flex">
						<div>弹性子元素</div>
						<pre>
							<code>
								{
`<div className="box-layout">
	<div>非弹性子元素</div>
	<div className="flex">弹性子元素</div>
</div>`
								}
							</code>
						</pre>
					</div>
				</div>
			</section>
		);
	}
});

module.exports = page;
