// SVGO wants its configuration values in a really weird format
// https://github.com/karify/external-svg-sprite-loader/blob/master/index.js
module.exports = {
	removeTitle: true,
	convertColors: {
		names2hex: true,
		rgb2hex: true,
		shorthex: true,
		shortname: true,

		// Convert this color code in fills/strokes/etc. to currentColor (used to generate mono-capable assets)
		// NOTE: must be exact, case-sensitive match before any other conversions
		// Assets must be authored with this in mind
		// https://github.com/svg/svgo/blob/master/plugins/_collections.js#L2527
		// https://github.com/svg/svgo/blob/master/plugins/convertColors.js#L61
		currentColor: '#FF00FF'

	}
}
