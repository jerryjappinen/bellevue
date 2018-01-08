const merge = require('lodash').merge
const baseConfig = require('../analytics')
module.exports = merge({}, baseConfig, {

	// We can disable tracking for development by setting this to `null`
	id: null

})
