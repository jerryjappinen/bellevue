import { includes } from 'lodash'

// Get SCSS constants
// eslint-disable-next-line import/no-webpack-loader-syntax
import styles from '!sass-to-js-var-loader!@styles-constants'

// Convert some values to numbers
var parsedStyles = {}
for (const key in styles) {
	const potentialUnit = styles[key].substr(-2)
	if (includes(['ms', 'px'], potentialUnit)) {
		parsedStyles[key] = parseInt(styles[key])
	} else {
		parsedStyles[key] = styles[key]
	}
}

export default parsedStyles
