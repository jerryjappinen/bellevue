// See docs at https://router.vuejs.org/en/api/options.html
module.exports = {

	// 'hash': extra hash characters in URLs, no server configuration needed for routing to work
	// 'history': no extra characters in URLs, but requires server configuration
	mode: 'history',

	// Class names used by <router-link>
	// NOTE: these should conform to our class naming conventions
	linkActiveClass: 'is-active',
	linkExactActiveClass: 'is-exact-active'

}
