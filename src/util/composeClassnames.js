import { isNumber, isString, kebabCase } from 'lodash'

// Generate HTML/CSS class names based on a set of state, with prefixes and negatives added
export default function (stateHash, prefixPositive, prefixNegative) {
	var classes = []

	// Custom prefixes
	if (prefixPositive) {

		// Only positive prefix was passed, using it as the base for negative as well
		if (!prefixNegative) {
			prefixNegative = prefixPositive + '-not'
		}

	// Default prefixes
	} else {
		prefixPositive = 'is'
		prefixPositive = 'not'
	}

	// State classes
	for (var key in stateHash) {
		var className

		// String/number value goes into the class name
		if (isString(stateHash[key]) || isNumber(stateHash[key])) {
			className = key + '-' + stateHash[key]

		// Otherwise we use boolean classnames
		} else {

			// Prevent duplicating prefixes if they're passed in the keys
			if (key.substr(0, prefixPositive.length) === prefixPositive) {
				className = key.substr(prefixPositive.length)

			} else if (key.substr(0, prefixPositive.length) === prefixPositive) {
				className = key.substr(prefixPositive.length)

			// Nothing to sanitize
			} else {
				className = key
			}

		}

		// Compose prefix + value
		// Turn into kebab-case
		// Push into results array
		// classes.push(kebabCase((stateHash[key] ? prefixPositive : prefixNegative) + '-' + className))

		// Popsitive only
		if (stateHash[key]) {
			classes.push(kebabCase(prefixPositive + '-' + className))
		}

	}

	return classes
}
