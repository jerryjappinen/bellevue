import { includes, mapValues } from 'lodash'

// Get SCSS constants
// eslint-disable-next-line import/no-webpack-loader-syntax
import constants from '!!/Users/jerry.jappinen/Development/sass-values-loader?preserveKeys=false!@styles-constants'
// import constants from '!!sass-values-loader!@styles-constants'

// // Return normalized values
// export default mapValues(constants, (value, key) => {

// 	// Convert some values to numbers
// 	const potentialUnit = value.substr(-2)
// 	if (includes(['ms', 'px'], potentialUnit)) {
// 		return parseInt(value)
// 	}

// 	return value
// })

export default constants
