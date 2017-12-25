import { camelCase, isString, upperFirst } from 'lodash'

export default (modelOrModelName, propsData) => {
	let Model = modelOrModelName

	// Require `Model` dynamically
	if (isString(Model)) {
		const normalizedModelName = upperFirst(camelCase(Model))

		try {
			Model = require('@models/' + normalizedModelName).default
		} catch (error) {
			console.warn('newModelInstance: Model not found ("' + normalizedModelName + '").')
			return null
		}

	}

	return new Model({
		propsData
	})
}
