const meta = require('../config.meta')

// sitemap.xml (only in production)
// https://www.npmjs.com/package/sitemap-webpack-plugin
module.exports = {
	base: meta.host,
	paths: [
		'/',
		'/demo'
	],
	options: {
		fileName: 'sitemap.xml'
	}
}
