// NOTE: this file will be imported during tooling before ES6 is supported
module.exports = {

	// Will be used in base HTML templating
	meta: {
		title: 'Pokeree',
		description: 'Planning poker for the masses.',
		themeColor: '#000000',
		iosStatusBarStyle: 'black-translucent'
	},

	// https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
	// https://www.npmjs.com/package/webapp-manifest-plugin
	webAppManifest: {
		name: 'Pokeree',
		title: 'Pokeree',
		description: 'Planning poker for the masses.',
		// dir: 'auto',
		lang: 'en-US',
		display: 'standalone',
		orientation: 'portrait',
		// startUrl: '/',
		preferRelatedApplications: false,
		backgroundColor: '#fff',
		themeColor: '#000000',
		icons: [
			{
				type: 'image/png',
				src: 'icon-48.png',
				sizes: '48x48'
			},
			{
				type: 'image/png',
				src: 'icon-57.png',
				sizes: '57x57'
			},
			{
				type: 'image/png',
				src: 'icon-70.png',
				sizes: '70x70'
			},
			{
				type: 'image/png',
				src: 'icon-72.png',
				sizes: '72x72'
			},
			{
				type: 'image/png',
				src: 'icon-76.png',
				sizes: '76x76'
			},
			{
				type: 'image/png',
				src: 'icon-96.png',
				sizes: '96x96'
			},
			{
				type: 'image/png',
				src: 'icon-114.png',
				sizes: '114x114'
			},
			{
				type: 'image/png',
				src: 'icon-120.png',
				sizes: '120x120'
			},
			{
				type: 'image/png',
				src: 'icon-144.png',
				sizes: '144x144'
			},
			{
				type: 'image/png',
				src: 'icon-150.png',
				sizes: '150x150'
			},
			{
				type: 'image/png',
				src: 'icon-152.png',
				sizes: '152x152'
			},
			{
				type: 'image/png',
				src: 'icon-192.png',
				sizes: '192x192'
			},
			{
				type: 'image/png',
				src: 'icon-256.png',
				sizes: '256x256'
			},
			{
				type: 'image/png',
				src: 'icon-310.png',
				sizes: '310x310'
			}
		],
		// preferRelatedApplications: false,
		relatedApplications: [
			// {
			// 	platform: 'play',
			// 	id: 'com.google.samples.apps.iosched'
			// }
		],
		scope: '/'
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

	// Links to static or externally hosted JS that need a script tag in index.html
	scriptLinks: [
		// '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
		// '/static/vendor.js'
	],

	// Links to static or externally hosted CSS that need a style tag in index.html
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
