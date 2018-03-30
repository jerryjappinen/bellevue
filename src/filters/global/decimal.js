export default (value, length) => {
	return Number.parseFloat(value).toFixed(length ? length : 2)
}
