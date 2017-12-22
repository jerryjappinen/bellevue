const paths = require('../config.paths')

// sitemap.xml (only in production)
// https://www.npmjs.com/package/sitemap-webpack-plugin
module.exports = {
	base: paths.host,
	paths: [
		'/',
		'/demo'
	],
	options: {
		fileName: 'sitemap.xml'
	}
}
