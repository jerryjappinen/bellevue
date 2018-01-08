module.exports = {

	// Canonical production URL
	// Needed for robots.txt and sitemap.xml generation in production builds
	host: 'https://example.com/',

	// Files under static (during runtime)
	staticAssetsPath: '/',
	faviconFilename: 'favicon.png',
	appleIconFilename: 'favicon.png',

	// Links to static or externally hosted JS that need a script tag in `index.html.ejs`
	scriptLinks: [
		// '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
		// '/static/vendor.js'
	],

	// Links to static or externally hosted CSS that need a style tag in `index.html.ejs`
	styleLinks: [
		'//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600|Roboto Mono|Dosis'
		// '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
		// '/static/vendor.css'
	],

	// List of URLs to add a prefetch meta tag for
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ
	prefetch: []

}
