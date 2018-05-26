// Return file base name
export default (string) => {
	let baseName = string.substring(string.lastIndexOf('/') + 1)
	const dotIndex = baseName.indexOf('.')

	if (dotIndex > -1) {
		baseName = baseName.substring(0, dotIndex)
	}

	return baseName
}
