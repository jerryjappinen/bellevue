const paths = require('../paths')

// robots.txt (only in production)
// https://github.com/itgalaxy/generate-robotstxt
// http://www.robotstxt.org
module.exports = {
	sitemap: paths.host + 'sitemap.xml',
	host: paths.host,
	policy: [
		// {
		// 	userAgent: '*',
		// 	allow: '/',
		// 	disallow: '/foo',
		// 	crawlDelay: 10,
		// 	cleanParam: 'ref /foo/'
		// }
	]
}
