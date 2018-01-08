const merge = require('lodash').merge
const baseConfig = require('../paths')
module.exports = merge({}, baseConfig, {
	host: 'http://localhost:8080/',
	staticAssetsPath: '/static/'
})
