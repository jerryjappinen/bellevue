import { isArray } from 'lodash'

const destroyModelInstance = (modelInstance) => {
	return modelInstance.$destroy()
}

const isInstance = (obj) => {
	return obj && obj.$destroy ? true : false
}

export default (arrayOrInstance, callback) => {

	// One instance
	if (isInstance(arrayOrInstance)) {
		destroyModelInstance(arrayOrInstance)

		// Array
	} else if (isArray(arrayOrInstance)) {
		arrayOrInstance.forEach((instance, key) => {
			destroyModelInstance(instance)
		})
	}

	if (callback) {
		callback()
	}

}
