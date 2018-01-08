const meta = require('../meta')

// NOTE: this file will be imported during tooling before ES6 is supported
// https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
// https://www.npmjs.com/package/webapp-manifest-plugin
module.exports = {
	name: meta.title,
	title: meta.title,
	description: meta.description,
	// dir: 'auto',
	lang: 'en-US',
	display: 'standalone',
	orientation: 'portrait',
	// startUrl: '/',
	preferRelatedApplications: false,
	backgroundColor: meta.backgroundColor,
	themeColor: meta.themeColor,
	scope: '/',
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
	]

}
