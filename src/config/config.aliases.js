
// Aliases usable in codebase when doing imports and resolving URLs. From project root.
// NOTE: unlike other configuration files, this is needed by the low-level tooling scripts BEFORE any aliases have been defined and full URL resolution is working (since those aliases are defined here, duh). That's why this is split from other configuration files.
module.exports = {

	// The base configuration (alias is mostly for the client)
	// NOTE: for client-side code it would be better to use a JS utility that reads configuration (merging values from multiple sources) instead of using these raw values in application code
	'@config': 'src/config',
	// '@locales': 'src/locales',

	// Vendor code, services, utilities etc.
	// '@models': 'src/models',
	// '@services': 'src/services',
	'@util': 'src/util',
	// '@vendor': 'src/vendor',

	// Assets
	'@assets': 'src/assets',
	// '@fonts': 'src/fonts',
	'@svg': 'src/svg',

	// Vue application code
	'@components': 'src/components',
	'@directives': 'src/vue-directives',
	'@mixins': 'src/vue-mixins',
	'@plugins': 'src/vue-plugins',

	// Global styles
	// NOTE: we could split this further
	'@global-styles': 'src/styles/global.scss',
	'@shared-styles': 'src/styles/shared.scss',

	// Test cases
	// '@test': 'test'

	// src root
	// NOTE: prefer the other aliases over this (so we keep this last)
	'@': 'src'

}
