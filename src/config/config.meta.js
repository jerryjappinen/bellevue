// NOTE: this file will be imported during tooling before ES6 is supported
module.exports = {

	// Will be used in base HTML templating
	meta: {
		title: 'Pokeree',
		description: 'Planning poker for the masses.',
		themeColor: '#000000',
		iosStatusBarStyle: 'black-translucent'
	},

	// Localisation
	defaultLocale: 'en',
	fallbackLocale: 'en',

	// Link to native iOS app's App Store page
	appStore: {
		appId: '',
		affiliate: '',
		appArgument: ''
	},

	// Format detection meta tag for iOS
	// https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
	formatDetection: {
		'telephone': 'yes'
	},

	// Links to static or externally hosted JS that need a script tag in `index.html.ejs`
	scriptLinks: [
		// '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
		// '/static/vendor.js'
	],

	// Links to static or externally hosted CSS that need a style tag in `index.html.ejs`
	styleLinks: [
		// '//fonts.googleapis.com/css?family=Muli:400,400i,600,600i,700,700i'
		// '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
		// '/static/vendor.css'
	],

	// List of URLs to add a prefetch meta tag for
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ
	prefetch: [],

	// Enable some meta tags that optimize the mobile experience
	mobile: true,
	defaultTouchHighlight: false,

	// Viewport control for mobile devices
	// https://developer.mozilla.org/en/docs/Mozilla/Mobile/Viewport_meta_tag
	// https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html
	// NOTE: keys must be in kebab-case
	viewport: {
		'width': 'device-width',
		'height': null,
		'initial-scale': 1,
		'minimum-scale': null,
		'maximum-scale': 1,
		'user-scalable': 'no',
		'viewport-fit': 'cover'
	},

	// robots.txt
	// https://github.com/itgalaxy/generate-robotstxt
	// http://www.robotstxt.org
	robotsTxt: {
		// sitemap: 'sitemap.xml',
		// host: 'http://example.com',
		policy: [
			// {
			// 	userAgent: '*',
			// 	allow: '/',
			// 	disallow: '/foo',
			// 	crawlDelay: 10,
			// 	cleanParam: 'ref /foo/'
			// }
		]
	},

	// http://www.robotstxt.org/meta.html
	robotsMeta: [
		// 'index',
		// 'noindex',
		// 'follow',
		// 'nofollow'
	]

}
