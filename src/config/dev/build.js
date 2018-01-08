const merge = require('lodash').merge
const baseConfig = require('../build')
module.exports = merge({}, baseConfig, {

	// Set debug flag when importing this file
	isDebug: true,

	// NOTE: Better to keep this disabled on dev server
	offline: false

})
