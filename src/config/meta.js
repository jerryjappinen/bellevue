// NOTE: this file will be imported during tooling before ES6 is supported
module.exports = {

	// Will be used in base HTML templating
	title: 'Bellevue',
	description: 'A full-featured frontend project template for modern single-page applications built on Vue.js and Webpack.',
	themeColor: '#42b983',
	backgroundColor: '#fafafa',

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

	// Enable some meta tags that optimize the mobile experience
	mobile: true,
	defaultTouchHighlight: false,
	iosStatusBarStyle: 'black-translucent',

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

	// http://www.robotstxt.org/meta.html
	robotsMeta: [
		// 'index',
		// 'noindex',
		// 'follow',
		// 'nofollow'
	]

}
