import { composeClassnames } from '@util'

// Set a computed property with prefixed classnames
// https://vuejs.org/v2/guide/mixins.html
export default {

	computed: {

		classes () {
			console.log('this.$options.name', this.$options.name)
			if (this.classnames) {
				return composeClassnames(this.classnames, 'c-' + this.$options.name)
			}
			return null
		}

	}

}
