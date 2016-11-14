const page = React.createClass({
	render: () => (
		<section className="tl">
			<h1>THE END</h1>
			<div>参考资料</div>
			<div className="col-layout">
				<ul className="col-6">
					<li>《HTTP 权威指南》</li>
					<li><a href="http://blog.csdn.net/hguisu/article/details/8608888" target="_blank">HTTP详解(3)-http1.0 和http1.1 区别</a></li>
					<li><a href="http://mrpeak.cn/blog/http2/" target="_blank">HTTP 2.0的那些事</a></li>
					<li><a href="https://www.zhihu.com/question/34074946" target="_blank">HTTP/2.0 相比1.0有哪些重大改进？</a></li>
				</ul>
				<ul className="col-6">
					<li><a href="http://www.jianshu.com/p/52d86558ca57/comments/3560156" target="_blank">面试时如何优雅的谈论HTTP／1.0／1.1／2.0</a></li>
					<li><a href="http://www.alloyteam.com/2016/03/discussion-on-web-caching/" target="_blank">浅谈Web缓存</a></li>
					<li><a href="https://my.oschina.net/ososchina/blog/494074" target="_blank">HTTP 304/200(from cache) 静态资源缓存原理</a></li>
					<li><a href="http://www.ruanyifeng.com/blog/2016/06/dns.html" target="_blank">DNS 原理入门</a></li>
				</ul>
			</div>
		</section>
	)
});

module.exports = page;
