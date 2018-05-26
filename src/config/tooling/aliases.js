// We can switch paths per environment, so we won't bundle extra code to runtime package
const isDev = (process.env.NODE_ENV !== 'production') ? true : false

// Aliases usable in runtime codebase when doing imports and resolving URLs
//
// NOTE: Order matters here!
// - Put `@foo-bar` before `@foo`
// - Put `@foo` before `@`
module.exports = {

	// The base configuration files (alias is mostly for the client)
	'@config': isDev ? 'src/config/dev' : 'src/config',
	'@routes': 'src/config/tooling/routes',

	// Assets
	'@assets': 'src/assets',
	'@fonts': 'src/fonts',
	// '@locales': 'src/locales',
	'@svg': 'src/svg',

	// Vendor code, services, utilities etc.
	'@models': 'src/models',
	'@services': 'src/services',
	'@util': 'src/util',
	'@vendor': 'src/vendor',

	// Vue application code
	'@components': 'src/components',
	// '@components-local': 'src/components-local',
	'@directives-global': 'src/directives/global',
	'@directives': 'src/directives',
	'@filters-global': 'src/filters/global',
	'@filters': 'src/filters',
	'@mixins-global': 'src/mixins/global',
	'@mixins': 'src/mixins',
	'@store': 'src/store',

	// Global styles
	'@styles-variables': 'src/styles/variables.scss',
	'@styles-global': 'src/styles/global.scss'

	// Test cases
	// '@unit': 'unit'
	// '@e2e': 'e2e'
	// '@test-tooling': 'test'

	// `src/` root
	// NOTE: prefer the other aliases over this (so we keep this last)
	// '@': 'src'

}
