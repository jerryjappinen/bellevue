var _ = require('lodash');
var base = require('../src/.eslintrc');

module.exports = _.merge(
	{},
	base,
	{
		plugins: base.plugins.concat([
			'jest'
		]),
		extends: base.extends.concat([
			'plugin:jest/recommended'
		]),
		env: {
			jest: true
		},
		// globals: {},
		rules: {}
	}
);
