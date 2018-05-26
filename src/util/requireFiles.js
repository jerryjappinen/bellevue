import { isArray, mapKeys, mapValues } from 'lodash'

import getBasename from './getBasename'

// Require all files from the given directory
// Returns an object with base filenames as keys, and required content as values
// NOTE: default exports must be accessed with `.default`
export default (path, extensions, preserveDefault) => {

	// Compose regexp
	const extensionsString = isArray(extensions) ? extensions.join('|') : ('' + extensions)
	const reg = new RegExp('\.(' + extensionsString + ')$', 'i')

	// Find files
	let files = require.context(path, true, reg)
	files = mapKeys(files, (value, key) => {
		return getBasename(key)
	})


	// Map values to default exports
	if (!preserveDefault) {
		files = mapValues(files, (value, key) => {
			if (value.default) {
				return value.default
			}
			return value
		})

	}

	return files
}
