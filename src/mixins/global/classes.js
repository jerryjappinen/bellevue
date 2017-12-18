import composeClassnames from '@util/composeClassnames'

// Set a computed property with prefixed classnames
// https://vuejs.org/v2/guide/mixins.html
export default {

	computed: {

		classes () {
			const prefix = 'c-' + this.$options.name
			let classes = [prefix]

			if (this._classes) {
				classes = classes.concat(composeClassnames(this._classes, prefix))
			}

			return classes
		}

	}

}
