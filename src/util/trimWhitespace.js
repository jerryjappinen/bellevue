// Condence all whitespace in a string to maximum of one space
export default (string) => {
	return string.trim().replace(/\s+/g, ' ')
}
