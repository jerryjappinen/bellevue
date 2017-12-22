const meta = require('../config.meta')

// robots.txt (only in production)
// https://github.com/itgalaxy/generate-robotstxt
// http://www.robotstxt.org
module.exports = {
	sitemap: meta.host + 'sitemap.xml',
	host: meta.host,
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
