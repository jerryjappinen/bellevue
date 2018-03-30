// ESLint only supports JS, not (S)CSS or HTML.
// http://eslint.org/docs/user-guide/configuring
// http://eslint.org/docs/user-guide/rules



//
// NOTE
//
// - This file should contain the rules for OUR custom JS code.
// - The rules defined here should be accompanied with comments explaining the rationale behind the convention.
// - Using the severity 'error' will break builds even during development, so it's better to reserve it for most serious things only.
// - All warnings should also be cleaned up from production code however.
//
// Other linter files
//
// - Please keep the ROOT `/.eslintrc.js` without modifications, as it is the default for most Vue projcts.
// - You can specify further rules in .eslintrc files under sub folders for more granular, cascading rulesets.
// - You can import these rules in other places, like under tests.

module.exports = {
	plugins: [
		'import',
		'vue'
	],
	extends: [
		'standard',
		'plugin:vue/recommended'
	],
	rules: {

		// Stylistic issues

		// Indent with tabs, because spaces are not user-adjustable in IDEs, are harder to target with mouse cursors and will always have indentation errors
		'no-tabs': ['off'],
		'indent': ['warn', 'tab'],

		// Semi colons required to avoid any gotchas
		'semi': [
			'warn',
			'never'
		],

		// Single quotes should be used
		// NOTE: template literals not allowed currently, but can be enabled if we have legitimate use cases for them
		'quotes': [
			'warn',
			'single',
			{
				'avoidEscape': false,
				'allowTemplateLiterals': false
			}
		],

		// Leftovers
		'no-unused-expressions': 'warn',

		// Number of consecutive blank lines allowed
		'no-multiple-empty-lines': [
			'warn',
			{
				'max': 3,
				'maxBOF': 2,
				'maxEOF': 1
			}
		],



		// Guard against duplicate variable names in one scope
		'no-shadow': ['error'],
		'no-param-reassign': ['warn', {
			'props': true,
			'ignorePropertyModificationsFor': []
		}],



		// Language features

		// Misc.
		'padded-blocks': 'off',        // Weird rule, we need whitespace sometimes
		'no-empty': 'warn',            // Empty blocks should be cleaned up
		'no-unreachable': 'warn',      // Unreachable code should be cleaned up
		'no-else-return': 'error',     // Smelly, code will break when refactoring
		'no-useless-escape': 'off',    // Sometimes escaping certain characters is not useless

		// Variables should be declared when they are used for the first time
		// This makes it easier to move them from one scope to another when refactoring
		'one-var': [
			'error',
			'never'
		],

		// Allow balancing object notation key-value pairs
		'key-spacing': ['warn'],

		// config.someItems['foo'] is sometimes useful
		// It can highlight that we're referring to an item with a very specific, hardcoded name (that probably should be a variable)
		'dot-notation': ['off'],

		// Make arrow functions slightly less dangerous and confusing
		'no-confusing-arrow': ['error'],
		'arrow-parens': ['error', 'always'],
		'arrow-body-style': ['error', 'always'],
		'arrow-spacing': [
			'error',
			{
				'before': true,
				'after': true
			}
		],

		// Would normally prefer the same traditional object syntax everywhere, because shorthand cannot always be used.
		// It's better to have only one format in the codebase. However imports and exports have similar shorthand syntax anyway.
		'object-shorthand': [
			'warn',
			'always'
		],

		// Destructuring assignments
		// Think twice about how to use them
		// http://teeohhem.com/why-destructuring-is-a-terrible-idea-in-es6/
		'no-useless-rename': ['warn'],
		'prefer-destructuring': [
			'error',
			{
				'array': false,
				'object': false
			}
		],

		// Allow long ternary (not always 'unneeded')
		// See http://stackoverflow.com/questions/2100758/javascript-or-variable-assignment-explanation
		'no-unneeded-ternary': ['off'],

		// New Foo() is fine
		'no-new': ['off'],



		// Rules for imports plugin
		// https://github.com/benmosher/eslint-plugin-import

		// FIXME: we should enable these once this issue with aliases is resolved:
		// https://github.com/benmosher/eslint-plugin-import/issues/779
		// 'import/named': ['error'],
		// 'import/default': ['error'],
		// 'import/no-extraneous-dependencies': ['error'],

		'import/no-absolute-path': ['error'],
		'import/no-webpack-loader-syntax': ['error'],
		'import/export': ['warn'],
		'import/no-named-as-default': ['warn'],
		'import/first': ['warn'],
		'import/no-duplicates': ['warn'],
		'import/extensions': [
			'warn',
			'never',
			{
				'svg': 'always'
			}
		],

		// We turn this off, as sometimes we want default to be an object containing all the named exports
		'import/no-named-as-default-member': ['off'],



		// Vue-specific
		// https://github.com/vuejs/eslint-plugin-vue#bulb-rules
		'vue/html-indent': [
			'error',
			'tab',
			{
				'attribute': 1,
				'closeBracket': 0,
				'ignores': []
			}
		],
		'vue/max-attributes-per-line': [
			'warn',
			{
				'singleline': 3,
				'multiline': {
					'max': 1,
					'allowFirstLine': false
				}
			}
		],
		'vue/name-property-casing': ['error', 'kebab-case'],
		'vue/require-default-prop': ['off'],
		'vue/require-prop-types': ['off'],
		'vue/attributes-order': ['off']

	}
}
