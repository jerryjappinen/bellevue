import { isNumber, isString, kebabCase } from 'lodash'

const normalizePrefix = (prefix) => {
	if (!prefix && prefix !== '') {
		return 'is'
	}
	return prefix
}

const composeClassname = (key, value, prefix) => {

	if (value) {
		const normalizedPrefix = normalizePrefix(prefix)
		let classname = '' + key

		// String/number value goes into the class name
		if (isString(value) || isNumber(value)) {
			classname = classname + '-' + value

		// Otherwise we use boolean classnames
		} else {

			// Prevent duplicating prefixes if they're passed in the keys
			if (classname.substr(0, normalizedPrefix.length) === normalizedPrefix) {
				classname = classname.substr(normalizedPrefix.length)
			}

		}

		// Add formatted classname to result list
		return kebabCase(normalizedPrefix + '-' + classname)
	}

	return null
}

// Generate HTML/CSS class names based on a set of state, with prefixes and negatives added
export default function (stateHash, prefix) {
	const classes = []

	// Treat each class
	for (const key in stateHash) {
		const classname = composeClassname(key, stateHash[key], prefix)

		// We only add the classname if the value is truthy
		if (classname) {
			classes.push(classname)
		}

	}

	return classes
}
