// Stylelint supports CSS and SCSS
// https://stylelint.io/user-guide/configuration/
// https://stylelint.io/user-guide/rules/
// https://www.npmjs.com/package/stylelint-scss

//
// NOTE
//
// - This file should contain the rules for OUR custom (S)CSS code.
// - The rules defined here should be accompanied with comments explaining the rationale behind the convention.
//
// Other linter files
//
// - Please keep the ROOT `/.stylelintrc` without modifications, as it is the default for most Vue projcts.
// - You can specify further rules in .eslintrc files under sub folders for more granular, cascading rulesets.
// - You can import these rules in other places, like under tests.

// NOTE
// Apparently this does NOT extend root configuration as one would expect
// All settings must be defined here, including processors and plugins

module.exports = {

	// Treat CSS issues as warnings rather than errors
	defaultSeverity: 'warning',

	processors: [
		'stylelint-processor-html'
	],

	plugins: [
		'stylelint-scss'
	],



	// Coding style

	extends: [
		'stylelint-config-standard'
	],

	rules: {

		// Indent with tabs
		'indentation': ['tab'],

		// These will cause false positives
		'no-empty-source': null,
		'at-rule-no-unknown': null,

		// We're not quite this strict
		'declaration-empty-line-before': null,
		'block-closing-brace-empty-line-before': null,
		'rule-empty-line-before': null,

		// Comments
		'comment-no-empty': true,
		'comment-empty-line-before': null, // Would like to use this, but will warn on commented single-line rules
		'comment-whitespace-inside': null,

		// Misc basic things
		'color-no-invalid-hex': true,
		'function-calc-no-unspaced-operator': true,
		'number-leading-zero': 'always',
		'length-zero-no-unit': true,
		'no-extra-semicolons': true,
		'no-eol-whitespace': true,
		'no-missing-end-of-source-newline': true,
		'no-invalid-double-slash-comments': null,
		'declaration-block-no-duplicate-properties': true,
		'declaration-colon-newline-after': null,
		'function-parentheses-newline-inside': 'always-multi-line',
		'block-closing-brace-newline-after': 'always',
		'block-no-empty': true,

		// Quotes
		// We'd like to enforce single quotes for everything but attribute selectors, but currently this is not possible
		// 'string-quotes': 'single',
		'font-family-name-quotes': 'always-unless-keyword',
		'function-url-quotes': 'always',

		// At rules
		'at-rule-name-space-after': 'always-single-line',
		'at-rule-semicolon-space-before': 'never',
		'at-rule-name-newline-after': null, // 'always-multi-line' is close but sometimes weird
		'at-rule-empty-line-before': [
			'always',
			{
				'ignore': [
					'after-comment',
					'inside-block',
					'blockless-after-blockless'
				]
			}
		],

		// Prefer lowercase in general
		'unit-case': 'lower',
		'color-hex-case': 'lower',
		'function-name-case': 'lower',
		'value-keyword-case': 'lower',
		'at-rule-name-case': 'lower',

		// Misc rules
		'shorthand-property-no-redundant-values': null,
		'number-no-trailing-zeros': null,
		'selector-pseudo-element-colon-notation': 'single',
		'declaration-block-no-redundant-longhand-properties': null,

		// No vendor prefixes in source
		// This is because Autoprefixer enforces correct vendor prefixes better than us humans and will remove them up anyway
		'at-rule-no-vendor-prefix': true,
		'media-feature-name-no-vendor-prefix': true,
		'selector-no-vendor-prefix': true,
		'property-no-vendor-prefix': true,
		'value-no-vendor-prefix': true,

		// Disallow excessive nesting
		// NOTE
		// - While the intention is good, a blanket limit does not do the job well
		// - Many times you should not be nesting even beyond two levels
		// - And sometimes nesting beyond this limit might make sense
		'max-nesting-depth': [
			4
		],

		// Allow convenient spacing, but don't go overboard
		'selector-max-empty-lines': 3,
		'function-max-empty-lines': 3,
		'value-list-max-empty-lines': 3,
		'max-empty-lines': [
			3
		],



		// SCSS-specific linting

		// Stylistic
		'scss/dollar-variable-colon-space-after': 'always',
		'scss/dollar-variable-colon-space-before': 'never',

		// Confusing, not clear if compiles to shorthand or individual properties
		'scss/declaration-nested-properties': 'never'

	}
}
