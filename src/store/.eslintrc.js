// When writing vuex code, some patterns that are normally disallowed can be common
module.exports = {
	rules: {

		// We turn this off so we can comfortably mutate state that is passed as an argument
		'no-param-reassign': ['off'],

		// We frequently break this rule by reusing common variable names in the same file
		'no-shadow': ['off']

	}
}
