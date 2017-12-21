// Aliases usable in codebase when doing imports and resolving URLs. From project root.
//
// NOTE:
// Order matters here!
// - Put `@foo-bar` before `@foo`
// - Put `@foo` before `@`
module.exports = {

	// The base configuration files (alias is mostly for the client)
	'@config': 'src/config',
	'@routes': 'src/config/tooling/config.routes',

	// Locales
	// '@locales': 'src/locales',

	// Assets
	'@assets': 'src/assets',
	// '@fonts': 'src/fonts',
	'@svg': 'src/svg',

	// Vendor code, services, utilities etc.
	// '@models': 'src/models',
	'@services': 'src/services',
	'@util': 'src/util',
	'@vendor': 'src/vendor',

	// Vue application code
	'@components': 'src/components',
	'@directives': 'src/directives',
	'@mixins-global': 'src/mixins/global',
	'@mixins': 'src/mixins',
	'@plugins': 'src/plugins',

	// Global styles
	// NOTE: we could split this further
	'@styles-constants': 'src/styles/constants.scss',
	'@styles-global': 'src/styles/global.scss',
	'@styles-shared': 'src/styles/shared.scss'

	// Test cases
	// '@unit': 'unit'
	// '@e2e': 'e2e'
	// '@test-tooling': 'test'

	// `src/` root
	// NOTE: prefer the other aliases over this (so we keep this last)
	// '@': 'src'

}
